import { getDB } from "#database";

import type { Account } from "#types/entities";
import type { PaginationDB } from "#types/pagination";

export async function getAccounts({ offset, limit }: PaginationDB) {
  const { db } = await getDB();
  const query = `
    SELECT (id, created_at, updated_at, name, password, email, role)
    FROM accounts
    ORDER BY
      created_at DESC
    OFFSET $(offset)
    LIMIT $(limit)
  `;

  const accounts = await db.manyOrNone<Account>(query, { offset, limit });
  return accounts;
}

export async function clearAccounts() {
  const { db } = await getDB();
  const query = "TRUNCATE TABLE accounts CASCADE";

  await db.none(query);
  return true;
}