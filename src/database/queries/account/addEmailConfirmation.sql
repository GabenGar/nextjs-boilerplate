INSERT INTO email_confirmations 
  (account_id, confirmation_key, expires_at)
VALUES (${account_id}, ${confirmation_key}, ${expires_at})
RETURNING *