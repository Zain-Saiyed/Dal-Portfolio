import { Router } from 'express';
import user from './user.js';
import discussionforum from './discussionforum.js';

const router = Router();

router.use('/user', user);
router.use('/discussionforum', discussionforum );

export default router;