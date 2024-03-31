import { Router } from "express";
import user from "./user.js";
import profile from "./profile.js";
import portfolio from './portfolio.js';
import discussionforum from './discussionforum.js';

const router = Router();

router.use("/user", user);
router.use("/profile", profile);
router.use('/portfolio', portfolio);
router.use('/discussionforum', discussionforum );

export default router;
