import { getPosts, getPostsOnly } from "../db/query.js";

const homePage = async (req, res) => {
  const postsOnly = await getPostsOnly();
  const posts = await getPosts();

  if (req.isAuthenticated()) {
    console.log(req.sessionID);

    res.render("home", { usersPosts: posts, user: true });
  } else {
    res.render("home", { usersPosts: postsOnly, user: false });
  }
};

export { homePage };
