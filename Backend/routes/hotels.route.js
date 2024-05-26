import express from 'express'
import { getHotels, dropHotel } from '../controllers/hotels.controller.js';
const router = express.Router();

// GET all hotels
router.get('/', getHotels);

// drop hotel
router.delete('/drop/:id', dropHotel);

export default router;
