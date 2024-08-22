import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

// Route to create a new user
router.post('/users/create', UserController.createUser);

// Route to retrieve a user by ID
router.get('/users/:id', UserController.getUserById);

export default router;
