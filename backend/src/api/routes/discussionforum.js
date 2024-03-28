import { Router } from "express";
import {deletePost, saveDiscussionPost, saveReply} from '../controllers/discussionforum/index.js'
import { getAllPosts } from "../controllers/discussionforum/index.js";

const router = Router();

router.post("/add-post", saveDiscussionPost);
router.get("/get-all-posts", getAllPosts);
router.post("/add-reply", saveReply);
router.delete("/delete-post", deletePost)
export default router;