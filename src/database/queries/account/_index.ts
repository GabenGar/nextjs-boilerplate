import { nanoid } from "nanoid";
import { DAY } from "#environment/constants/durations";
import { toISOString } from "#lib/util/dates";
import { getDB } from "#database";

import type { Account, AccCreds, EmailConfirmation } from "#types/entities";

const { db } = getDB();

export async function addAccount(name: string, password: string) {
  const query = `
    INSERT INTO accounts (name, password)
    VALUES ($(name), $(password))
    RETURNING *
  `;
  const account = await db.one<Account>(query, { name, password });
  return account;
}

export async function findAccount({ name, password }: AccCreds) {
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
  const query = `
    SELECT *
    FROM accounts
    WHERE id = $(id)
  `;

  const account = await db.oneOrNone<Account>(query, { id });
  return account;
}

export async function createEmailConfirmation(
  account_id: number,
  email: string,
  confirmation_key: string
) {
  const expirationDate = new Date(Date.now() + DAY);
  const expires_at = toISOString(expirationDate);
  const query = `
    INSERT INTO email_confirmations 
      (account_id, confirmation_key, email, expires_at)
    VALUES ($(account_id), $(confirmation_key), $(email), $(expires_at))
    RETURNING *
  `;

  const confirmation = await db.one<EmailConfirmation>(query, {
    account_id,
    confirmation_key,
    email,
    expires_at,
  });
  return confirmation;
}

export async function findEmailConfirmationByKey(confirmation_key: string) {
  const query = `
    SELECT *
    FROM email_confirmations
    WHERE
      confirmation_key = $(confirmation_key)
  `;
  const confirmation = await db.oneOrNone<EmailConfirmation>(query, {
    confirmation_key,
  });

  return confirmation;
}
