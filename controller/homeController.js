import { getPosts, getPostsOnly } from "../db/query.js";

const homePage = async (req, res) => {
  if (req.isAuthenticated()) {
    const posts = await getPosts();
    console.log(posts);

    res.render("profile", { usersPosts: posts, user: req.user });
  } else {
    const postsOnly = await getPostsOnly();
    res.render("home", { usersPosts: postsOnly });
  }
};

export { homePage };
