import { Router } from "express";
import { homePage } from "../controller/homeController.js";

const indexRouter = Router();

indexRouter.get("/home", homePage);

export { indexRouter };
