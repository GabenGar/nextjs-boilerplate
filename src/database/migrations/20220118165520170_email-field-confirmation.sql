-- Up Migration
ALTER TABLE email_confirmations 
  ADD COLUMN email TEXT NOT NULL
-- Down Migration