import { deletePostFromDB, getPosts, getPostsOnly } from "../db/query.js";

const homePage = async (req, res) => {
  if (req.isAuthenticated()) {
    // Display admin page if user is admin
    if (req.user.admin) {
      const posts = await getPosts();
      console.log(posts);

      res.render("adminProfile", { usersPosts: posts, user: req.user });
    } else {
      const posts = await getPosts();
      console.log(posts);

      res.render("profile", { usersPosts: posts, user: req.user });
    }
  } else {
    const postsOnly = await getPostsOnly();
    res.render("home", { usersPosts: postsOnly });
  }
};

const deletePost = async (req, res) => {
  if (req.user.admin && req.isAuthenticated()) {
    await deletePostFromDB(req.query.deletePost);
    res.redirect("/home");
  }
};

export { homePage, deletePost };
