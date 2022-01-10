import migrateDB from "node-pg-migrate";
import { DATABASE_CLIENT_CONFIG } from "#environment/derived-vars";
import { cjsDirname } from "#server/util";

const migrationsFolder = cjsDirname(import.meta.url).__dirname;

export async function runMigrations() {
  const result = await migrateDB({
    databaseUrl: DATABASE_CLIENT_CONFIG,
    migrationsTable: "migrations",
    dir: migrationsFolder,
    direction: "up",
    checkOrder: true,
  });

  return result;
}
