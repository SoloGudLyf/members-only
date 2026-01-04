import { insertUsers } from "../db/query";

const signUpPage = (req, res) => res.render("sign-up-form");
const signUpPost = async (req, res, next) => {
  try {
    await insertUsers();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};
export { signUpPage, signUpPost };
