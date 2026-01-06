import { Router } from "express";
import { createPost, getPostForm } from "../controller/createPostController.js";

const createPostRouter = Router();
createPostRouter.get("/create-post", getPostForm);
createPostRouter.post("/create-post", createPost);
export { createPostRouter };
