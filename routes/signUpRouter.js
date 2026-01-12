import { Router } from "express";
import { signUpPage, signUpPost } from "../controller/signUpController.js";
import { body } from "express-validator";

const signUpRouter = Router();

signUpRouter.get("/sign-up", signUpPage);
signUpRouter.post(
  "/sign-up",
  body("password").isLength({ min: 5 }).withMessage("Password is too short"),
  body("username").notEmpty().withMessage("Username must not be empty"),
  body("username").escape(),
  body("password").notEmpty().withMessage("Password must not be empty"),
  body("password").escape(),
  body("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
  signUpPost
);

export { signUpRouter };
