import type { IDatabase } from "pg-promise";

export async function testConnection(db: IDatabase<any>) {
  // try to connect
  const conn = await db.connect();
  // success, release connection
  conn.done();
  // return server version
  return conn.client.serverVersion;
}
