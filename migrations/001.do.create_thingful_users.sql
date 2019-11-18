CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL UNIQUE,
  last_name TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  date_created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  date_modified TIMESTAMP WITH TIME ZONE,
  friends integer[]
);