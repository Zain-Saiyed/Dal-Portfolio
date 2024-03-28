import { Router } from "express";
import saveDiscussionPost from "../controllers/discussionforum/addpost";

const router = Router();
router.post('/add-post', saveDiscussionPost);

export default router;