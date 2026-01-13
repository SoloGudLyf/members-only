import { pool } from "./db/pool.js";

const query = `
  CREATE TABLE IF NOT EXISTS "session" (
    "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
  )
  WITH (OIDS=FALSE);
  ALTER TABLE "session" DROP CONSTRAINT IF EXISTS session_pkey;
  ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
  CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expire");
`;

async function setup() {
  try {
    await pool.query(query);
    console.log("Session table created successfully");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    process.exit();
  }
}

setup();
