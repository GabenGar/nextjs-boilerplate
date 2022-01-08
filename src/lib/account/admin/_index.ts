import { getAccounts } from "#database/queries/account/admin";
import { calculatePaginationDB } from "#lib/pagination";
import type { PaginationDB, PaginationInit } from "#lib/pagination";

export async function getAccountList(pagination: PaginationInit) {
  const paginationDB: PaginationDB = calculatePaginationDB(pagination);
  const accounts = await getAccounts(paginationDB);
  return accounts;
}
