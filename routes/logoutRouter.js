import { Router } from "express";
import { logoutPage } from "../controller/logoutController.js";

const logoutRouter = Router();

logoutRouter.get("/log-out", logoutPage);

export { logoutRouter };
