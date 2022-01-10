import { runMigrations } from "#database/migrations";
import { testConnection } from "./lib";

import type { IDatabase } from "pg-promise";

export async function setupTables(db: IDatabase<any>) {
  const version = await testConnection(db);
  console.log("Postgresql version: ", version);

  console.log("Setting up tables.");
  const tablesQuery = `
    CREATE TABLE IF NOT EXISTS accounts (
      "id" SERIAL PRIMARY KEY,
      "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updated_at" TIMESTAMP,
      "name" TEXT NOT NULL,
      "password" TEXT NOT NULL,
      "email" TEXT,
      "role" TEXT,
      UNIQUE ("name", "email")
    )
  `;

  await db.none(tablesQuery);
  const result = await runMigrations();
  console.log("Finished setting tables up.");
}
