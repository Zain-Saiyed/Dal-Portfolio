import { Router } from 'express';
import user from './user.js';
import portfolio from './portfolio.js';
const router = Router();

router.use('/user', user);
router.use('/portfolio', portfolio);

export default router;