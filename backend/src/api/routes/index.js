import { Router } from "express";
import user from "./user.js";
import profile from "./profile.js";
import portfolio from './portfolio.js';
const router = Router();

router.use("/user", user);
router.use("/profile", profile);
router.use('/portfolio', portfolio);

export default router;
