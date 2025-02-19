import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import authRoutes from './routes/v1/auth';
import healthRoutes from './routes/v1/health';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/health', healthRoutes);

// Basic error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const start = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log('Connected to database');
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start().catch((error) => {
  console.error('Unhandled error:', error);
  process.exit(1);
});
