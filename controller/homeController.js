import { getPostsOnly } from "../db/query.js";

const homePage = async (req, res) => {
  const posts = await getPostsOnly();
  res.render("home", { usersPosts: posts, user: false });
};

export { homePage };
