import { Router } from "express";
import { register } from "../controllers/user/index.js";

const router = Router();

router.post("/register", register);

export default router;
