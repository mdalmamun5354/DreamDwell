import express from 'express'
import { getHotels } from '../controllers/hotels.controller.js';
const router = express.Router();

// GET all hotels
router.get('/', getHotels);

export default router;
