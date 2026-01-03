import { Router } from "express";
import { homeController } from "../controller/homeController.js";

const indexRouter = Router();

indexRouter.get("/", homeController);


export { indexRouter };
