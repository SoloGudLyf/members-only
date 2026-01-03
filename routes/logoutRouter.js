import { Router } from "express";
import { logoutController } from "../controller/logoutController.js";


const logoutRouter = Router();

logoutRouter.get("/log-out", logoutController)

export {logoutRouter}