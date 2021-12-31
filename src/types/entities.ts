export interface Account {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  password: string;
  email: string;
  role: string;
}

export interface AccCreds {
  name: string
  password: string
}