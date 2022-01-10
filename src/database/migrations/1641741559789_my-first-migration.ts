import sqlFile from "./1641741559789_my-first-migration.sql"

import type { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(sqlFile);
}

// export async function down(pgm: MigrationBuilder): Promise<void> {}
