import pgLib, { IInitOptions, IDatabase, IMain } from "pg-promise";
import { DATABASE_URL } from "#environment/derived-vars";
import { createSingleton } from "#lib/util";

interface IDatabaseScope {
  db: IDatabase<any>;
  pgp: IMain;
}

const initOptions: IInitOptions = {};
const pgp = pgLib(initOptions);
const db = pgp(DATABASE_URL);

/**
 * @link https://stackoverflow.com/questions/34382796/where-should-i-initialize-pg-promise#answer-34427278
 * @returns
 */
export function getDB(): IDatabaseScope {
  return createSingleton<IDatabaseScope>("db-scope", () => {
    return {
      db,
      pgp,
    };
  });
}
