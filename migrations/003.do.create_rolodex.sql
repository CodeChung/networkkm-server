CREATE TABLE rolodex (
  sender INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  receiver INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  data jsonb
);