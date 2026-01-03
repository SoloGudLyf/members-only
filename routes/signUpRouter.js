import { Router } from "express";
import { signUpPage } from "../controller/signUpController.js";

const signUpRouter = Router();

signUpRouter.get("/sign-up", signUpPage);

export { signUpRouter };
