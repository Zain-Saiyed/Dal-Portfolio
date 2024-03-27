import { Router } from "express";
import { register } from "../controllers/portfolio/index.js";

const router = Router();

router.post("/portfolio", register);

export default router;
