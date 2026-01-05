import { getPosts } from "../db/query.js";
import passport from "passport";

const loginPage = (req, res) => {
  res.render("login");
};

const loginPost = async (req, res) => {
  passport.authenticate("local", {
    failureRedirect: "/log-in",
    successRedirect: "/home",
  });
  res.redirect("/home");
  const usersPosts = await getPosts();
  res.render("home", { usersPosts });
};
export { loginPage, loginPost };
