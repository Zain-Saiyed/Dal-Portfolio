import { Router } from "express";
import { portfolio, project } from "../controllers/portfolio/index.js";

const router = Router();

router.post("/", portfolio);
router.post("/project", project);

export default router;
