import { Router } from "express";
import { portfolio } from "../controllers/portfolio/index.js";

const router = Router();

router.post("/", portfolio);

export default router;
