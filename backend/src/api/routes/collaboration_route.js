import { Router } from "express";
import {
  fetchProjects,
  fetchResearch,
} from "../controllers/collaboration/index.js";

const router = Router();

router.get("/fetch_projects", fetchProjects);
router.get("/fetch_research", fetchResearch);

export default router;
