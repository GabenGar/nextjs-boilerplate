export interface Account {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  password: string;
  email?: string;
  role?: string;
}

export interface AccountClient extends Omit<Account, "id" | "password"> {}

export interface AccCreds {
  name: string
  password: string
  email?: string
}