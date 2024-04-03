import { Router } from "express";
import user from "./user.js";
import collaboration from "./collaboration_route.js";
import profile from "./profile.js";
<<<<<<< HEAD
import portfolio from "./portfolio.js";
import search from "./portfolio_search.js";
import discussionforum from "./discussionforum.js";
=======
import portfolio from './portfolio.js';
import search  from "./portfolio_search.js";
import discussionforum from './discussionforum.js';
import authMiddleware from "../middlewares/auth.js";
>>>>>>> a7a2b56761f884e051ed912b9e4957f83538d8c1

const router = Router();

router.use("/user", user);
<<<<<<< HEAD
router.use("/collaboration", collaboration);
router.use("/user", user);
router.use("/profile", profile);
router.use("/portfolio", portfolio);
router.use("/search", search);
router.use("/discussionforum", discussionforum);
=======
router.use("/profile", authMiddleware, profile);
router.use('/portfolio', portfolio);
router.use('/search',search);
router.use('/discussionforum', discussionforum );
>>>>>>> a7a2b56761f884e051ed912b9e4957f83538d8c1

export default router;
