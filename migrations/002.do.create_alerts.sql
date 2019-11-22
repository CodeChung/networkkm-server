CREATE TYPE category AS ENUM (
  'request', 
  'photo', 
  'event'
);

CREATE TABLE alerts (
  sender INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  receiver INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  type category NOT NULL,
  data jsonb,
  date_created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);