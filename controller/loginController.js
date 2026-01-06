import { getPosts } from "../db/query.js";
import passport from "passport";

const loginPage = (req, res) => {
  res.render("login");
};

const loginPost = () => {
 
};
export { loginPage, loginPost };
