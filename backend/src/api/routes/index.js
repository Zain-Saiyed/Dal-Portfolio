import { Router } from 'express';
import user from './user.js';
import discussionforum from './user.js';
const router = Router();

router.use('/user', user);
router.use('/discussionforum', discussionforum );

export default router;