import { getDB } from "#database";

const { db } = getDB();

export async function setupTables() {
  const accountsQuery = `CREATE TABLE IF NOT EXISTS accounts (
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
}
