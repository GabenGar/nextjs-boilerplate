import { getDB } from "#database";

import type { Account } from "#types/entities";

const { db } = getDB();

export async function createAcc(name: string, password: string) {
  const query = `
    INSERT INTO accounts (name, password)
    VALUES ($(name), $(password))
    RETURNING *
  `;
  const account = await db.one<Account>(query, { name, password });
  return account;
}
