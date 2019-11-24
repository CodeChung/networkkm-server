CREATE TABLE blog_comments (
  blog_id INTEGER
    REFERENCES blog(id) ON DELETE CASCADE NOT NULL,
  user_id INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  type category NOT NULL,
  data jsonb,
  date_created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);