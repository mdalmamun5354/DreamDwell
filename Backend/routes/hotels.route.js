import express from 'express'
import { getAll, drop, add } from '../controllers/hotels.controller.js';
const router = express.Router();

// GET all hotels
router.get('/', getAll);

// drop hotel
router.delete('/drop/:id', drop);

// Add hotel
router.post('/add', add);

export default router;
