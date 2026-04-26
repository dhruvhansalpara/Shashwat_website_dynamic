import express from 'express';
import { createServer as createViteServer } from 'vite';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import pool from './src/db/connection.ts';

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
    console.error('Error initializing database:', error);
    console.log('⚠️  Database connection failed - server will run with fallback data');
    console.log('💡 To fix: Update DB_PASSWORD in .env file with correct database password');
  }
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3001;
  const isProd = process.env.NODE_ENV === 'production';

  await initDb();

  console.log(`Starting server in ${isProd ? 'production' : 'development'} mode...`);

  // Basic security configurations
  app.use(cors());
  
  // LOG ALL REQUESTS
  app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
  });
  
  // Implement Helmet for security headers
  app.use(
    helmet({
      contentSecurityPolicy: isProd ? {
        useDefaults: true,
        directives: {
          "default-src": ["'self'"],
          "script-src": ["'self'", "'unsafe-inline'", "https://apis.google.com"],
          "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          "font-src": ["'self'", "https://fonts.gstatic.com"],
          "img-src": ["'self'", "data:", "https://images.unsplash.com", "https://picsum.photos", "*"],
          "connect-src": ["'self'", "https://vitals.vercel-insights.com"],
          "frame-src": ["'self'"],
          "object-src": ["'none'"],
          "upgrade-insecure-requests": [],
        },
      } : false, // Disable CSP in dev for easier local debugging with Vite
      crossOriginEmbedderPolicy: false,
      referrerPolicy: { policy: 'no-referrer-when-downgrade' },
      xssFilter: true,
      noSniff: true,
      frameguard: { action: 'deny' },
    })
  );

  app.use(express.json({ limit: '10mb' })); 

  // Destinations API
  const apiRouter = express.Router();
  apiRouter.get('/health', (req, res) => {
    console.log('API Request: /api/health');
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  apiRouter.get('/debug-check', (req, res) => {
    res.json({ message: "debug-success" });
  });

  apiRouter.get('/destinations', async (req, res) => {
    console.log('API Request: /api/destinations');
    try {
      const [rows] = await pool.query('SELECT * FROM destinations ORDER BY createdAt DESC');
      res.json(rows);
    } catch (error) {
      console.error('Error fetching destinations from database:', error);
      console.log('Falling back to static data for destinations');
      // Fallback to basic destinations if database fails
      const staticDestinations = [
        {
          id: 'fallback-1',
          name: 'Database Connection Issue',
          image: '/shashwat-logo-new.png',
          tourCount: 0,
          toursRegion: 'Please check database configuration'
        }
      ];
      res.json(staticDestinations);
    }
  });

  apiRouter.post('/destinations', async (req, res) => {
    const { id, name, image, tourCount, toursRegion } = req.body;
    try {
      await pool.query(
        'INSERT INTO destinations (id, name, image, tourCount, toursRegion) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE name=?, image=?, tourCount=?, toursRegion=?',
        [id, name, image, tourCount, toursRegion, name, image, tourCount, toursRegion]
      );
      res.json({ success: true });
    } catch (error) {
      console.error('Error saving destination:', error);
      res.status(500).json({ error: 'Failed to save destination' });
    }
  });

  apiRouter.delete('/destinations/:id', async (req, res) => {
    try {
      await pool.query('DELETE FROM destinations WHERE id = ?', [req.params.id]);
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting destination:', error);
      res.status(500).json({ error: 'Failed to delete destination' });
    }
  });

  // Packages API
  apiRouter.get('/packages', async (req, res) => {
    console.log('API Request: /api/packages');
    try {
      const [rows] = await pool.query('SELECT * FROM packages ORDER BY createdAt DESC');

      // Filter out seasonal packages that shouldn't be shown based on current month
      const currentMonth = new Date().getMonth() + 1; // 1-12
      const filteredRows = rows.filter((pkg: any) => {
        const name = pkg.name?.toLowerCase() || '';
        const description = pkg.description?.toLowerCase() || '';
        const location = pkg.location?.toLowerCase() || '';

        // Winter/snow packages (December-February)
        const winterKeywords = ['snow', 'ski', 'ice', 'winter', 'valley of flowers'];
        const isWinterPackage = winterKeywords.some(keyword =>
          name.includes(keyword) || description.includes(keyword) || location.includes(keyword)
        );

        // Monsoon/rain packages (June-September)
        const monsoonKeywords = ['monsoon', 'rain', 'waterfall', 'rafting'];
        const isMonsoonPackage = monsoonKeywords.some(keyword =>
          name.includes(keyword) || description.includes(keyword)
        );

        // Summer packages (March-May)
        const summerKeywords = ['beach', 'sun', 'summer', 'heat escape'];
        const isSummerPackage = summerKeywords.some(keyword =>
          name.includes(keyword) || description.includes(keyword)
        );

        // Filter logic based on current season
        if (isWinterPackage && (currentMonth < 11 || currentMonth > 2)) {
          return false; // Hide winter packages outside Nov-Feb
        }

        if (isMonsoonPackage && (currentMonth < 6 || currentMonth > 9)) {
          return false; // Hide monsoon packages outside Jun-Sep
        }

        // For now, show all summer packages year-round, but could be filtered if needed
        // if (isSummerPackage && (currentMonth < 3 || currentMonth > 5)) {
        //   return false; // Hide summer packages outside Mar-May
        // }

        return true;
      });

      console.log(`Filtered ${rows.length} packages to ${filteredRows.length} based on season (Month: ${currentMonth})`);

      // Transform database fields to match frontend Tour interface
      const transformedPackages = filteredRows.map((pkg: any) => ({
        id: pkg.id,
        title: pkg.name, // Map 'name' to 'title'
        location: pkg.location,
        price: parseFloat(pkg.price) || 0, // Convert string to number
        rating: 4.5, // Default rating since not in DB
        reviews: 150, // Default reviews since not in DB
        duration: pkg.duration,
        image: pkg.image,
        category: pkg.category,
        isPopular: pkg.isFeatured === 1,
        description: pkg.description,
        highlights: pkg.highlights ? JSON.parse(pkg.highlights) : [],
        itinerary: pkg.itinerary ? JSON.parse(pkg.itinerary) : [],
        inclusions: pkg.inclusions ? JSON.parse(pkg.inclusions) : [],
        exclusions: pkg.exclusions ? JSON.parse(pkg.exclusions) : [],
        gallery: pkg.gallery ? JSON.parse(pkg.gallery) : []
      }));

      res.json(transformedPackages);
    } catch (error) {
      console.error('Error fetching packages from database:', error);
      console.log('Falling back to static data for packages');
      // Fallback to static data if database fails
      const staticPackages = [
        {
          id: 'fallback-1',
          title: 'Database Connection Issue - Using Static Data',
          location: 'Please check database configuration',
          price: 0,
          rating: 0,
          reviews: 0,
          duration: 'Contact Admin',
          image: '/shashwat-logo-new.png',
          category: 'Error',
          isPopular: false,
          description: 'Database connection failed. Please check your .env file and database credentials.',
          highlights: ['Database Issue'],
          itinerary: [],
          inclusions: [],
          exclusions: [],
          gallery: []
        }
      ];
      res.json(staticPackages);
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

  // Car Rentals API
  apiRouter.get('/cars', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM car_rentals ORDER BY createdAt DESC');
      res.json(rows);
    } catch (error) {
      console.error('Error fetching cars from database:', error);
      console.log('Falling back to static data for cars');
      // Fallback to basic cars if database fails
      const staticCars = [
        {
          id: 'fallback-1',
          model: 'Database Connection Issue',
          type: 'Please check database configuration',
          category: 'Error',
          transmission: 'Contact Admin',
          seats: 0,
          bags: 0,
          pricePerKm: 0,
          image: '/shashwat-logo-new.png',
          isAvailable: false,
          features: ['Database Issue']
        }
      ];
      res.json(staticCars);
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
