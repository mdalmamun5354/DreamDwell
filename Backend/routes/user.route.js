import express from 'express';
import { signup, login, getAll, drop } from "../controllers/user.controller.js";
const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

// GET all users
router.get('/', getAll);

// drop user
router.delete('/drop/:id', drop);

export default router;