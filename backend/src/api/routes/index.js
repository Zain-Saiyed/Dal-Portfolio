import { Router } from "express";
import user from "./user.js";
import profile from "./profile.js";
import portfolio from './portfolio.js';
import search  from "./portfolio_search.js";
const router = Router();

router.use("/user", user);
router.use("/profile", profile);
router.use('/portfolio', portfolio);
router.use('/search',search);
export default router;
