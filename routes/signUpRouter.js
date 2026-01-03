import { Router } from "express";
import { signUpController } from "../controller/signUpController.js";

const signUpRouter = Router();

signUpRouter.get("/sign-up", signUpController);

export { signUpRouter };
