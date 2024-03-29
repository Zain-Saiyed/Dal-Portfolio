import { Router } from "express";
import {
  fetchProjects,
  fetchResearch,
  fetchProjectByid,
  fetchResearchByid,
  sendRequest,
  fetchCollabRequestsById,
} from "../controllers/collaboration/index.js";

const router = Router();

router.get("/fetch_projects", fetchProjects);
router.get("/fetch_research", fetchResearch);
router.get("/fetch_project", fetchProjectByid);
router.get("/fetch_research_study", fetchResearchByid);

router.post("/send_request", sendRequest);

router.get("/fetch_collab_requests", fetchCollabRequestsById);

export default router;
