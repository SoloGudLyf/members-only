import { Router } from "express";
import { signUpPage, signUpPost } from "../controller/signUpController.js";

const signUpRouter = Router();

signUpRouter.get("/sign-up", signUpPage);
signUpRouter.post("/sign-up", signUpPost);

export { signUpRouter };
