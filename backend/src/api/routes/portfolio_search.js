import { Router } from "express";
import { search } from "../controllers/portfolio_search/index.js";

const router = Router();

router.post("/portfolio", search);

export default router;
