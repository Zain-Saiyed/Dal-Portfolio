import { Router } from "express";
import user from "./user.js";
import collaboration from "./collaboration_route.js";
const router = Router();

router.use("/user", user);
router.use("/collaboration", collaboration);

export default router;
