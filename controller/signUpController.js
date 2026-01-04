import { insertUsers } from "../db/query.js";

const signUpPage = (req, res) => res.render("sign-up-form");
const signUpPost = async (req, res, next) => {
  const time = new Date();
  console.log(time);

  try {
    await insertUsers(req.body.username, req.body.password, time);
    passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/sign-up-form",
    });
  } catch (err) {
    return next(err);
  }
};
export { signUpPage, signUpPost };
