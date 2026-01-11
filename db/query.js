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
    "SELECT users.username,users_posts.post FROM users_posts JOIN users ON (users_posts.username=users.id)"
  );
  return rows;
};

const insertPost = async (id, post) => {
  await pool.query("INSERT INTO users_posts (username,post) VALUES($1,$2)", [
    id,
    post,
  ]);
};

const getUser = async (username) => {
  const { rows } = await pool.query(
    "SELECT username from users WHERE username=$1",
    [username]
  );
  return rows;
};
export { insertUsers, getPostsOnly, getPosts, insertPost, getUser };
