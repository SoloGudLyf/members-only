import { Router } from "express";
import { loginPage, loginPost } from "../controller/loginController.js";
import passport from "passport";
import { body } from "express-validator";

const loginRouter = Router();
loginRouter.get("/login", loginPage);
loginRouter.post(
  "/login",
  body("username").notEmpty().withMessage("Username must not be empty"),
  body("username").escape(),
  body("password").notEmpty().withMessage("Password must not be empty"),
  body("password").escape(),
  loginPost
);
export { loginRouter };
