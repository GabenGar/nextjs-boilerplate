import { setupTables } from "./tables";
import { getDBSingleton } from "./init";


let isInitialized = false;

export async function getDB() {
  const scope = getDBSingleton();

  if (!isInitialized) {
    await setupTables(scope.db);
    isInitialized = true;
  }

  return scope;
}