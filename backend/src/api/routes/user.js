import { Router } from "express";
import { register } from "../controllers/user/index.js";
import verifyEmail from '../controllers/user/verifyEmail.js';
import login from '../controllers/user/auth/login.js';
import authMiddleware from '../middlewares/auth.js';
import refreshTokenController from '../controllers/user/auth/refreshTokenController.js';
import logout from '../controllers/user/auth/logout.js';
import getSessionDetails from '../controllers/user/getSessionDetails.js';


const router = Router();

router.post("/register", register);
router.get('/verify-email/:username/:verificationCode', verifyEmail);
router.post('/login', login);
router.post('/refresh-token', refreshTokenController);

router.get('/session', getSessionDetails);


router.post('/logout', logout);
 
// router.get('/protected-route', authMiddleware, (req, res) => {
//     res.json({ message: 'You have accessed a protected route!' });
// });

export default router;
