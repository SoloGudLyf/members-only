import { Router } from "express";
import { deletePost, homePage } from "../controller/homeController.js";

const indexRouter = Router();

indexRouter.get("/home", homePage);
indexRouter.post("/home/delete", deletePost);
export { indexRouter };
