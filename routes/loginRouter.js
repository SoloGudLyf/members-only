import { Router } from "express";
import { loginPage, loginPost } from "../controller/loginController.js";
import passport from "passport";

const loginRouter = Router();
loginRouter.get("/login", loginPage);
loginRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
  })
);
export { loginRouter };
