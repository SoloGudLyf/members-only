import { pool } from "./pool.js";
import bcrypt from "bcryptjs";

const insertUsers = async (username, password, time) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users (username, password,time) VALUES ($1, $2,$3)",
    [ username, hashedPassword, time]
  );
};

export { insertUsers };
