/**
 * The pagination coming from client.
 */
export interface PaginationInit {
  currentPage: number
  totalCount?: number
  limit?: number
}

/**
 * Pagination used for DB.
 */
export interface PaginationDB {
  offset: number
  limit: number
}

/**
 * The resulting pagination.
 */
export interface Pagination {
  currentPage: number
  totalPages: number
  totalCount?: number
  limit: number
}