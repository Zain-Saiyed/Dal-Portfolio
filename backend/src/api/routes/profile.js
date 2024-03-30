import { Router } from "express";
import {
  fetchUserDetails,
  updateUserDetails,
  createPortfolio,
  getPortfolios,
} from "../controllers/profile/index.js";

const router = Router();

router.get("/user/:id", fetchUserDetails);
router.post("/user/:id/update", updateUserDetails);
router.get("/user/:id/portfolios", getPortfolios);

router.post("/portfolio/:id/create", createPortfolio);

export default router;
