import { checkUserPassword, getPosts } from "../db/query.js";
import passport from "passport";
import { validationResult } from "express-validator";
import { getUser } from "../db/query.js";

const loginPage = (req, res) => {
  res.render("login", { errors: [] });
};

const loginPost = async (req, res, next) => {
  const errors = validationResult(req).array();
  const userExist = await getUser(req.body.username);
  // Check if username exist
  userExist[0] ? errors : errors.push({ msg: "Username does not exist" });

  // Check if password matches username if user exists
  if (userExist.length !== 0) {
    const checkUserPasswordExist = await checkUserPassword(
      req.body.username,
      req.body.password
    );
    if (!checkUserPasswordExist) {
      errors.push({ msg: "Password does not exist" });
    }
  }

  // Display errors if there is
  if (!(errors.length === 0)) {
    return res.status(400).render("login", { errors });
  }

  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
  })(req, res, next);
};
export { loginPage, loginPost };
