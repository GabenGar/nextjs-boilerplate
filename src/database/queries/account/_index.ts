import { getDB } from "#database";

import type { Account, AccCreds } from "#types/entities";

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

export async function clearAccounts() {
  const { db } = await getDB();
  const query = "TRUNCATE TABLE accounts CASCADE";

  await db.none(query);
  return true;
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
