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
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;
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
      console.error('Error fetching destinations:', error);
      res.status(500).json({ error: 'Failed to fetch destinations' });
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
      res.json(rows);
    } catch (error) {
      console.error('Error fetching packages:', error);
      res.status(500).json({ error: 'Failed to fetch packages' });
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
      console.error('Error fetching cars:', error);
      res.status(500).json({ error: 'Failed to fetch cars' });
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
