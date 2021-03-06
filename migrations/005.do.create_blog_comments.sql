CREATE TABLE blog_comments (
  blog_id INTEGER
    REFERENCES blog(id) ON DELETE CASCADE NOT NULL,
  user_id INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  comment TEXT NOT NULL,
  date_created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
)