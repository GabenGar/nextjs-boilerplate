import { nanoid } from "nanoid";
import { toISOString } from "#lib/util/dates";
import { getDB, sqlQuery } from "#database";
import addEmailConfirmQuery from "./addEmailConfirmation.sql";
import getEmailConfirmQueryByKey from "./getEmailConfirmationByKey.sql";

import type { Account, AccCreds, EmailConfirmation } from "#types/entities";
import { DAY } from "#environment/constants/durations";

const emailConfirmAddSQL = sqlQuery(addEmailConfirmQuery);
const getEmailConfirmByKey = sqlQuery(getEmailConfirmQueryByKey);

export async function addAccount(name: string, password: string) {
  const { db } = await getDB();
  const query = `
    INSERT INTO accounts (name, password)
    VALUES ($(name), $(password))
    RETURNING *
  `;
  const account = await db.one<Account>(query, { name, password });
  return account;
}

export async function findAccount({ name, password }: AccCreds) {
  const { db } = await getDB();
  const query = `
    SELECT *
    FROM accounts
    WHERE
      name = $(name)
      AND password = $(password)
  `;

  const account = await db.oneOrNone<Account>(query, { name, password });
  return account;
}

export async function findAccountByName({ name }: AccCreds) {
  const { db } = await getDB();
  const query = `
    SELECT *
    FROM accounts
    WHERE
      name = $(name)
  `;

  const account = await db.oneOrNone<Account>(query, { name });
  return account;
}

export async function getAccount(id: number) {
  const { db } = await getDB();
  const query = `
    SELECT *
    FROM accounts
    WHERE id = $(id)
  `;

  const account = await db.oneOrNone<Account>(query, { id });
  return account;
}

export async function addEmailConfirmation(account_id: number) {
  const { db } = await getDB();
  const expirationDate = new Date(Date.now() + DAY);
  const expires_at = toISOString(expirationDate);
  const confirmation_key = nanoid();

  const confirmation = await db.one<EmailConfirmation>(emailConfirmAddSQL, {
    account_id,
    confirmation_key,
    expires_at,
  });
  return confirmation;
}

export async function findEmailConfirmationByKey(confirmation_key: string) {
  const { db } = await getDB();

  const confirmation = await db.oneOrNone<EmailConfirmation>(
    getEmailConfirmByKey,
    {
      confirmation_key,
    }
  );

  return confirmation
}
