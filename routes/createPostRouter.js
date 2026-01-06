import { Router } from "express";
import { postForm } from "../controller/createPostController.js";

const createPostRouter = Router();
createPostRouter.get("/create-post", postForm);

export { createPostRouter };
