import { Router } from "express";
import { fetchUserDetails, updateUserDetails } from "../controllers/profile/index.js";

const router = Router();

router.get("/user/:id", fetchUserDetails);
router.post("/user/:id/update", updateUserDetails);

export default router;