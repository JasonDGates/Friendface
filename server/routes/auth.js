import { express } from 'express';
import { login } from '../controllers/auth.js'

const router = express.Router();

// When we hit '/auth' it redirects here, so any routes we write here are assumed to have '/auth' preceeding
// ex: 'auth/login'
router.post('/login', login);

export default router;