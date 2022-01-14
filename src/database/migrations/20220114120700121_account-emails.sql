-- Up Migration
DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  is_verified BOOLEAN DEFAULT false NOT NULL,
  UNIQUE ("name", "email")
)
;

CREATE TABLE email_confirmations (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  account_id INT UNIQUE REFERENCES accounts,
  confirmation_key TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMPTZ NOT NULL
)
-- Down Migration