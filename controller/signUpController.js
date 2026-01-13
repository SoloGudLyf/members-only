import { getUser, insertUsers, isFirstUser } from "../db/query.js";
import passport from "passport";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

let isAdmin = false;
(async function makeFirstUserAdmin() {
  isAdmin = await isFirstUser();
  isAdmin;
})();

const signUpPage = (req, res) => res.render("sign-up-form", { errors: [] });

const signUpPost = async (req, res, next) => {
  // Get validation result and log to the user
  let errors = validationResult(req).array();
  const userExist = await getUser(req.body.username);
  userExist;
  userExist[0] ? errors.push({ msg: "Username is taken" }) : errors;

  if (!(errors.length === 0)) {
    return res.status(400).render("sign-up-form", { errors });
  }

  if (req.body.adminPasscode === process.env.ADMIN_PASSCODE) isAdmin = true;

  // Insert User into DB and authenticate
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    await insertUsers(req.body.username, hashedPassword, new Date(), isAdmin);
    passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/sign-up",
    })(req, res, next);
  } catch (err) {
    return err;
  }
};
export { signUpPage, signUpPost };
