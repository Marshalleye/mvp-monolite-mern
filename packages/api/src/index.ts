import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { ResponseHandler } from './utils/response';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json(ResponseHandler.success({ status: 'API is running' }, 'Health check passed'));
});

// Test database endpoint
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(ResponseHandler.success(users, 'Users retrieved successfully'));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json(ResponseHandler.error('Failed to fetch users', errorMessage));
  }
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 API server running on port ${PORT}`);
});
