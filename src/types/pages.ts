export interface BasePageProps extends Record<string, unknown> {
  errors?: Record<string, string[]> | string[]
}