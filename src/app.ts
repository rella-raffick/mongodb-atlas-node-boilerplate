import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './config/db';
import userRoutes from './routes/userRoutes';
import enquiryRoutes from "./routes/enquiryRoutes";

const app: Application = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', enquiryRoutes);

// Connect to MongoDB Atlas
connectDB().then(() => {
  console.log('Connected to MongoDB Atlas successfully');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

export default app;
