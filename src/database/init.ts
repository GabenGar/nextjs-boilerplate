import pgLib from "pg-promise";
import { DATABASE_URL } from "#environment/derived-vars";
import { createSingleton } from "#lib/util";

import type { IInitOptions, IDatabase, IMain } from "pg-promise";

interface IDatabaseScope {
  db: IDatabase<any>;
  pgp: IMain;
}

const initOptions: IInitOptions = {

};
const pgp = pgLib(initOptions);
// return date strings as strings
pgp.pg.types.setTypeParser(1114, dateString=>dateString)

/**
 * @link https://stackoverflow.com/questions/34382796/where-should-i-initialize-pg-promise#answer-34427278
 */
export function getDBSingleton(): IDatabaseScope {
  return createSingleton<IDatabaseScope>("db-scope", () => {
    return {
      db: pgp(DATABASE_URL),
      pgp,
    };
  });
}
