import { Router } from "express";
import {saveDiscussionPost} from '../controllers/discussionforum/index.js'
import { getAllPosts } from "../controllers/discussionforum/index.js";

const router = Router();

router.post("/add-post", saveDiscussionPost);
router.get("/get-all-posts", getAllPosts);
export default router;