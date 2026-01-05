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
  console.log(rows);

  return rows;
};

const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM users_posts");
  console.log(rows);

  return rows;
};
export { insertUsers, getPostsOnly, getPosts };
