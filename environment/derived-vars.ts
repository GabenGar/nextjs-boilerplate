import {
  NODE_ENV,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_HOSTNAME,
} from "./env-vars";

import type { ClientConfig } from "pg";

export const IS_DEVELOPMENT = NODE_ENV === "development";
export const DATABASE_CLIENT_CONFIG: ClientConfig = {
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  port: Number(DATABASE_PORT),
  host: DATABASE_HOSTNAME,
  // https://help.heroku.com/MDM23G46/why-am-i-getting-an-error-when-i-upgrade-to-pg-8
  ssl: !IS_DEVELOPMENT && { rejectUnauthorized: false },
};
export const IS_BROWSER = typeof window !== 'undefined'
