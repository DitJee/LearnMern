import express from "express";
import Posts from "../controllers/Posts.js";
const router = express.Router();

router.get("/", Posts.getPosts);
router.post("/", Posts.createPost);

export default router;
