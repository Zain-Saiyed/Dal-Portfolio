import { Router } from "express";
import { search } from "../controllers/user/index.js";

const router = Router();

router.post("/search", search);

export default router;
