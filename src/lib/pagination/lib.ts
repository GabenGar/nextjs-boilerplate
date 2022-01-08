import type { PaginationInit, PaginationDB } from "./types";

export function calculatePaginationDB({
  currentPage,
  limit = 50,
  totalCount,
}: PaginationInit): PaginationDB {
  return {
    limit,
    offset: (currentPage - 1) * limit,
  };
}
