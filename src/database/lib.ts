import path from "path";
import { QueryFile } from "pg-promise";

import type { IDatabase } from "pg-promise";

export async function testConnection(db: IDatabase<any>) {
  // try to connect
  const conn = await db.connect();
  // success, release connection
  conn.done();
  // return server version
  return conn.client.serverVersion;
}

export function sqlQuery(file_path: string) {
  const absolutePath = path.resolve(file_path);
  return new QueryFile(absolutePath, { minify: true });
}
