import { Router } from "express";
import {saveDiscussionPost} from '../controllers/discussionforum/index.js'

const router = Router();

router.post("/add-post", saveDiscussionPost);

export default router;