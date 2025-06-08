import express from 'express';
import { signup, login } from '../controllers/authController.js';
import { googleAuth } from '../controllers/authController.js';
import { newsLetterSign } from '../controllers/newsLetter.js';
const router = express.Router();

router.post('/auth/signup', signup);
router.post('/auth/login', login);
router.post('/auth/google', googleAuth);
router.post('/newsletter',newsLetterSign)
export default router;
