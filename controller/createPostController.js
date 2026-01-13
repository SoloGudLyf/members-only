import { insertPost } from "../db/query.js";

const getPostForm = (req, res) => res.render("postForm");
const createPost = async (req, res) => {
  const userId = req.user.id;
  const post = req.body.post;
  const title = req.body.title;

  await insertPost(userId, post, new Date(), title);
  res.redirect("/home");
};
export { getPostForm, createPost };
