export interface APIRequest<D = {}> {
  data: D;
}

export interface APIResponse<D = {}> {
  success: boolean;
  data?: D;
  errors?: Record<string, string[]> | string[];
}
