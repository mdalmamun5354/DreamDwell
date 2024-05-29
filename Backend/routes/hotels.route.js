import express from 'express'
import { getAll, drop, add, edit } from '../controllers/hotels.controller.js';
const router = express.Router();

// GET all hotels
router.get('/', getAll);

// drop hotel
router.delete('/drop/:id', drop);

// Add hotel
router.post('/add', add);

// Edit hotel
router.post('/edit/:id', edit);

export default router;
