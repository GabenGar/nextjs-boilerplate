import pgLib from "pg-promise";
import {
  DATABASE_HOSTNAME,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
} from "#environment/env-vars";
import { IS_DEVELOPMENT } from "#environment/derived-vars";
import { createSingleton } from "#lib/util";

import type { IInitOptions, IDatabase, IMain } from "pg-promise";
import type {
  IClient,
  IConnectionParameters,
} from "pg-promise/typescript/pg-subset";

interface IDatabaseScope {
  db: IDatabase<any>;
  pgp: IMain;
}

const initOptions: IInitOptions = {};
const connParams: IConnectionParameters<IClient> = {
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  port: Number(DATABASE_PORT),
  host: DATABASE_HOSTNAME,
  // https://help.heroku.com/MDM23G46/why-am-i-getting-an-error-when-i-upgrade-to-pg-8
  ssl: !IS_DEVELOPMENT && { rejectUnauthorized: false },
};
const pgp = pgLib(initOptions);
// return date strings as strings
pgp.pg.types.setTypeParser(1114, (dateString) => dateString);

/**
 * @link https://stackoverflow.com/questions/34382796/where-should-i-initialize-pg-promise#answer-34427278
 */
export function getDBSingleton(): IDatabaseScope {
  return createSingleton<IDatabaseScope>("db-scope", () => {
    return {
      db: pgp(connParams),
      pgp,
    };
  });
}
