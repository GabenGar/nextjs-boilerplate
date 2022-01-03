import { getDB } from "#database";
import { testConnection } from "./lib";

export async function setupTables() {
  const { db } = getDB();
  const version = await testConnection();
  console.log(version);
  console.log("Setting up tables.");
  const accountsQuery = `
    CREATE TABLE IF NOT EXISTS accounts (
      "id" SERIAL PRIMARY KEY,
      "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updated_at" TIMESTAMP,
      "name" TEXT NOT NULL,
      "password" TEXT NOT NULL,
      "email" TEXT,
      "role" TEXT
      UNIQUE ("name", "email")
    )
  `;

  await db.none(accountsQuery);
  console.log("Finished setting tables up.");
}
