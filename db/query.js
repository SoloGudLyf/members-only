import { pool } from "./pool.js";
import bcrypt from "bcryptjs";

const insertUsers = async (username, password, time) => {
 
 
  await pool.query(
    "INSERT INTO users (username, password,time) VALUES ($1, $2,$3)",
    [username, password, time]
  );
};

const getPostsOnly = async () => {
  const { rows } = await pool.query("SELECT post FROM users_posts");

  return rows;
};

const getPosts = async () => {
  const { rows } = await pool.query(
    "SELECT users.username,users_posts.post,users_posts.date FROM users_posts JOIN users ON (users_posts.username=users.id)"
  );
  return rows;
};

const insertPost = async (id, post, time) => {
  await pool.query(
    "INSERT INTO users_posts (username,post,date) VALUES($1,$2,$3)",
    [id, post, time]
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
  console.log(rows[0].password);

  const passwordMatch = await bcrypt.compare(password, rows[0].password);
  console.log(passwordMatch, rows[0].password, password);

  return passwordMatch;
};

export {
  insertUsers,
  getPostsOnly,
  getPosts,
  insertPost,
  getUser,
  checkUserPassword,
};
