import { getDB } from "./init";

const { db } = getDB();

export async function testConnection() {
  // try to connect
  const conn = await db.connect();
  // success, release connection
  conn.done();
  // return server version
  return conn.client.serverVersion;
}
