import { Router } from "express";
import {
  fetchProjects,
  fetchResearch,
  fetchProjectByid,
} from "../controllers/collaboration/index.js";

const router = Router();

router.get("/fetch_projects", fetchProjects);
router.get("/fetch_research", fetchResearch);
router.get("/fetch_project", fetchProjectByid);

export default router;
