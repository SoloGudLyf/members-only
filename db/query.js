import { pool } from "./pool.js";
import bcrypt from "bcryptjs";

const insertUsers = async (username, password, time, isAdmin) => {
  await pool.query(
    "INSERT INTO users (username, password,time,admin) VALUES ($1, $2,$3,$4)",
    [username, password, time, isAdmin]
  );
};

const getPostsOnly = async () => {
  const { rows } = await pool.query("SELECT title,post FROM users_posts");

  return rows;
};

const getPosts = async () => {
  const { rows } = await pool.query(
    "SELECT users.username,users_posts.post,users_posts.date,users_posts.id,title FROM users_posts JOIN users ON (users_posts.username=users.id)"
  );
  return rows;
};

const insertPost = async (id, post, time, title) => {
  await pool.query(
    "INSERT INTO users_posts (username,post,date,title) VALUES($1,$2,$3,$4)",
    [id, post, time, title]
  );
};

const getUser = async (username) => {
  const { rows } = await pool.query(
    "SELECT username from users WHERE username=$1",
    [username]
  );
  return rows;
};

const checkUserPassword = async (username, password) => {
  const { rows } = await pool.query(
    "SELECT password from users WHERE username=$1",
    [username]
  );
  rows[0].password;

  const passwordMatch = await bcrypt.compare(password, rows[0].password);
  passwordMatch, rows[0].password, password;

  return passwordMatch;
};

const isFirstUser = async () => {
  const { rows } = await pool.query("SELECT COUNT(id) from users");
  rows;
  if (rows[0].count === "0") return true;
  return false;
};

const deletePostFromDB = async (id) => {
  await pool.query("DELETE FROM users_posts WHERE id=$1", [id]);
};

export {
  insertUsers,
  getPostsOnly,
  getPosts,
  insertPost,
  getUser,
  checkUserPassword,
  isFirstUser,
  deletePostFromDB,
};
