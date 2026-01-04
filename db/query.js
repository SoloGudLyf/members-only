const pool = require("./pool.js");
const bcrypt = require("bcryptjs");

const insertUsers = async () => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    req.body.username,
    hashedPassword,
  ]);
};

export { insertUsers };
