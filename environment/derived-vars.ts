import { NODE_ENV, DATABASE_HOSTNAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_NAME } from "./env-vars";

export const IS_DEVELOPMENT = NODE_ENV === "development";
export const DATABASE_URL = `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOSTNAME}:${DATABASE_PORT}/${DATABASE_NAME}`;