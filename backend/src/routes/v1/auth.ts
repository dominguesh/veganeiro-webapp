import { Router } from 'express';
import { register } from '../../controllers/auth/register';
import { login } from '../../controllers/auth/login';

const router = Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);

export default router;
