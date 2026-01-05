import { Router } from "express";
import { loginPage, loginPost } from "../controller/loginController.js";

const loginRouter = Router();
loginRouter.get("/login", loginPage);
loginRouter.post("/log-in",loginPost)
export { loginRouter };
