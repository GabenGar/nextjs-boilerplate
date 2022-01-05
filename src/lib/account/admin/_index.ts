import { getAccounts } from "#database/queries/account/admin";
import { PaginationDB, PaginationInit } from "#types/pagination";

export async function getAccountList({
  currentPage,
  limit = 50,
  totalCount = undefined,
}: PaginationInit) {
  const paginationDB: PaginationDB = {
    limit,
    offset: currentPage * limit,
  };
  const accounts = await getAccounts(paginationDB);
  return accounts;
}
