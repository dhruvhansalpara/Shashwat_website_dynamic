import express from 'express';
import { createServer as createViteServer } from 'vite';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import pool from './src/db/connection.ts';

// Import static data for fallbacks
import { tours as staticTours, destinations as staticDestinationsData } from './src/data/indiaToursData.ts';
import { cars as staticCarsData } from './src/data/cars.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDb() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database successfully');

    // Create destinations table if not exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS destinations (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image TEXT,
        tourCount INT DEFAULT 0,
        toursRegion VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create packages table if not exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS packages (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        searchRegion VARCHAR(255),
        searchPlaces JSON,
        price DECIMAL(10, 2),
        rating DECIMAL(3, 2),
        reviews INT,
        duration VARCHAR(100),
        image TEXT,
        category VARCHAR(100),
        isPopular BOOLEAN DEFAULT FALSE,
        description TEXT,
        highlights JSON,
        itinerary JSON,
        inclusions JSON,
        exclusions JSON,
        gallery JSON,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create car_rentals table if not exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS car_rentals (
        id VARCHAR(255) PRIMARY KEY,
        model VARCHAR(255) NOT NULL,
        type VARCHAR(255),
        category ENUM('SUV', 'Sedan', 'Hatchback'),
        transmission ENUM('Automatic', 'Manual'),
        seats INT,
        bags INT,
        pricePerKm DECIMAL(10, 2),
        image TEXT,
        isAvailable BOOLEAN DEFAULT TRUE,
        features JSON,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    connection.release();
    console.log('Database tables initialized');
  } catch (error) {
    console.log('⚠️  Database connection failed - server will run with robust local data from src/data/');
    console.log('💡 This is expected in the demo environment unless DB credentials are provided.');
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProd = process.env.NODE_ENV === 'production';
  const hasDbConfig = !!process.env.DB_PASSWORD;

  let dbConnected = false;

  if (hasDbConfig) {
    try {
      await initDb();
      dbConnected = true;
      console.log('✅ Database connected and initialized');
    } catch (error: any) {
      console.warn('❌ Database connection failed during startup:', error.message);
      console.log('ℹ️  Falling back to Local Data Mode.');
    }
  } else {
    console.log('ℹ️  Running in Local Data Mode (No DB_PASSWORD provided). Using src/data/ for content.');
  }

  // Basic security and request parsing middleware
  app.use(cors());
  app.use(express.json({ limit: '10mb' }));
  
  app.use(
    helmet({
      contentSecurityPolicy: false, // Disabled for preview environment compatibility
      crossOriginEmbedderPolicy: false,
      referrerPolicy: { policy: 'no-referrer-when-downgrade' },
    })
  );

  // --- API Routes ---
  const apiRouter = express.Router();

  apiRouter.get('/health', (req, res) => {
    res.json({ status: 'ok', hasDb: dbConnected });
  });

  apiRouter.get('/destinations', async (req, res) => {
    if (!dbConnected) return res.json(staticDestinationsData);
    try {
      const [rows]: any = await pool.query('SELECT * FROM destinations ORDER BY createdAt DESC');
      if (!rows || rows.length === 0) return res.json(staticDestinationsData);
      
      const transformed = rows.map((dest: any) => ({
        ...dest,
        // Ensure name is used for toursRegion if none provided
        toursRegion: dest.toursRegion || dest.name,
        // Map packageCount if it exists in DB
        packageCount: dest.packageCount || 0
      }));
      res.json(transformed);
    } catch (error: any) {
      console.warn('DB Fetch failed for destinations:', error.message);
      res.json(staticDestinationsData);
    }
  });

  apiRouter.get('/packages', async (req, res) => {
    if (!dbConnected) return res.json(staticTours);
    try {
      const [rows]: any = await pool.query('SELECT * FROM packages ORDER BY createdAt DESC');
      if (!rows || rows.length === 0) return res.json(staticTours);

      const currentMonth = new Date().getMonth() + 1;
      const filteredRows = rows.filter((pkg: any) => {
        const name = (pkg.name || pkg.title || '').toLowerCase();
        const description = (pkg.description || '').toLowerCase();
        
        const monsoonKeywords = ['monsoon', 'rain', 'waterfall'];
        const isMonsoonPackage = monsoonKeywords.some(kw => name.includes(kw) || description.includes(kw));
        if (isMonsoonPackage && (currentMonth < 6 || currentMonth > 9)) return false;

        return true;
      });

      const transformed = filteredRows.map((pkg: any) => ({
        id: pkg.id,
        title: pkg.name || pkg.title, 
        location: pkg.location,
        price: parseFloat(pkg.price) || 0,
        rating: pkg.rating || 4.5,
        reviews: pkg.reviews || 150,
        duration: pkg.duration,
        image: pkg.image,
        category: pkg.category,
        isPopular: pkg.isPopular === 1 || pkg.isFeatured === 1,
        destination_ids: pkg.destination_ids ? (typeof pkg.destination_ids === 'string' ? JSON.parse(pkg.destination_ids) : pkg.destination_ids) : [],
        description: pkg.description,
        highlights: pkg.highlights ? (typeof pkg.highlights === 'string' ? JSON.parse(pkg.highlights) : pkg.highlights) : [],
        itinerary: pkg.itinerary ? (typeof pkg.itinerary === 'string' ? JSON.parse(pkg.itinerary) : pkg.itinerary) : [],
        inclusions: pkg.inclusions ? (typeof pkg.inclusions === 'string' ? JSON.parse(pkg.inclusions) : pkg.inclusions) : [],
        exclusions: pkg.exclusions ? (typeof pkg.exclusions === 'string' ? JSON.parse(pkg.exclusions) : pkg.exclusions) : [],
        gallery: pkg.gallery ? (typeof pkg.gallery === 'string' ? JSON.parse(pkg.gallery) : pkg.gallery) : []
      }));
      res.json(transformed);
    } catch (error: any) {
      console.warn('DB Fetch failed for packages:', error.message);
      res.json(staticTours);
    }
  });

  apiRouter.get('/cars', async (req, res) => {
    if (!dbConnected) return res.json(staticCarsData);
    try {
      // First try the 'cars' table which seems to be where admin saves
      let [rows]: any = await pool.query('SELECT * FROM cars ORDER BY createdAt DESC');
      
      if (!rows || rows.length === 0) {
        // Fallback to car_rentals if cars is empty
        [rows] = await pool.query('SELECT * FROM car_rentals ORDER BY createdAt DESC');
      }

      if (!rows || rows.length === 0) return res.json(staticCarsData);
      
      const transformed = rows.map((car: any) => ({
        id: car.id,
        model: car.name || car.model,
        type: car.type,
        category: car.category || 'SUV',
        transmission: car.transmission || 'Manual',
        seats: car.seats || 4,
        bags: car.luggage || car.bags || 2,
        pricePerKm: parseFloat(car.pricePerKm) || 0,
        image: car.image,
        isAvailable: car.isAvailable === 1,
        features: car.features ? (typeof car.features === 'string' ? JSON.parse(car.features) : car.features) : []
      }));
      res.json(transformed);
    } catch (error: any) {
      console.warn('DB Fetch failed for cars:', error.message);
      res.json(staticCarsData);
    }
  });

  apiRouter.get('/inquiries', async (req, res) => {
    if (!dbConnected) return res.json([]);
    try {
      const [rows]: any = await pool.query('SELECT * FROM inquiries ORDER BY createdAt DESC');
      res.json(rows);
    } catch (error: any) {
      console.error('Error fetching inquiries:', error);
      res.status(500).json({ error: 'Failed to fetch inquiries' });
    }
  });

  apiRouter.post('/inquiries', async (req, res) => {
    const { name, email, phone, message, packageName, packagePrice } = req.body;
    try {
      await pool.query(
        'INSERT INTO inquiries (id, name, email, phone, message, packageId, packagePrice, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())',
        [`inq_${Date.now()}`, name, email, phone, message, packageName, packagePrice]
      );
      res.json({ success: true });
    } catch (error: any) {
      console.error('Error saving inquiry:', error);
      res.status(500).json({ error: 'Failed to save inquiry' });
    }
  });

  apiRouter.post('/packages', async (req, res) => {
    const data = req.body;
    const fields = [
      'id', 'title', 'location', 'searchRegion', 'searchPlaces', 'price', 'rating', 'reviews',
      'duration', 'image', 'category', 'isPopular', 'description', 'highlights', 'itinerary',
      'inclusions', 'exclusions', 'gallery'
    ];

    const values = fields.map(f => {
      const val = data[f];
      if (Array.isArray(val) || (val && typeof val === 'object')) {
        return JSON.stringify(val);
      }
      return val;
    });

    const placeholders = fields.map(() => '?').join(', ');
    const updatePart = fields.map(f => `${f}=VALUES(${f})`).join(', ');

    const sql = `INSERT INTO packages (${fields.join(', ')}) VALUES (${placeholders}) ON DUPLICATE KEY UPDATE ${updatePart}`;

    try {
      await pool.query(sql, values);
      res.json({ success: true });
    } catch (error) {
      console.error('Error saving package:', error);
      res.status(500).json({ error: 'Failed to save package' });
    }
  });

  apiRouter.delete('/packages/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM packages WHERE id = ?', [req.params.id]);
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting package:', error);
      res.status(500).json({ error: 'Failed to delete package' });
    }
  });

  apiRouter.post('/cars', async (req, res) => {
    const data = req.body;
    const fields = [
      'id', 'model', 'type', 'category', 'transmission', 'seats', 'bags', 
      'pricePerKm', 'image', 'isAvailable', 'features'
    ];

    const values = fields.map(f => {
      const val = data[f];
      if (Array.isArray(val) || (val && typeof val === 'object')) {
        return JSON.stringify(val);
      }
      return val;
    });

    const placeholders = fields.map(() => '?').join(', ');
    const updatePart = fields.map(f => `${f}=VALUES(${f})`).join(', ');

    const sql = `INSERT INTO car_rentals (${fields.join(', ')}) VALUES (${placeholders}) ON DUPLICATE KEY UPDATE ${updatePart}`;

    try {
      await pool.query(sql, values);
      res.json({ success: true });
    } catch (error) {
      console.error('Error saving car:', error);
      res.status(500).json({ error: 'Failed to save car' });
    }
  });

  apiRouter.delete('/cars/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM car_rentals WHERE id = ?', [req.params.id]);
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting car:', error);
      res.status(500).json({ error: 'Failed to delete car' });
    }
  });

  app.use('/api', apiRouter);

  // Vite integration
  if (!isProd) {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false // Explicitly disable HMR to avoid port 24678 conflicts
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    } else {
      console.warn('Production mode enabled but "dist" directory not found. Please run "npm run build" first.');
      app.get('*', (req, res) => {
        res.status(500).send('Production build missing. Please run "npm run build" first.');
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
