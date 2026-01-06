import { pool } from "./pool.js";
import bcrypt from "bcryptjs";

const insertUsers = async (username, password, time) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users (username, password,time) VALUES ($1, $2,$3)",
    [username, hashedPassword, time]
  );
};

const getPostsOnly = async () => {
  const { rows } = await pool.query("SELECT posts FROM users_posts");
  return rows;
};

const getPosts = async () => {
  const { rows } = await pool.query(
    "SELECT users.username,posts FROM users_posts JOIN users ON (users_posts.username=users.id)"
  );

  return rows;
};
export { insertUsers, getPostsOnly, getPosts };
