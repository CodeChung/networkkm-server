BEGIN;

TRUNCATE
  users
  RESTART IDENTITY CASCADE;

INSERT INTO users (first_name, last_name, email, password)
VALUES
  ('Keith', 'Marko', 'kmarko30@aol.com', '$2a$12$S8aZJkKbw/VggLPWZizy7uhJmovTMf3D0GR.AC0vgDftk5PxfIEK2'),
  ('Harry', 'Chung', 'hc9825@gmail.com', '$2a$12$gV3yYtNzu.6DgBeP1PcSHeiJT.DYURnB0dlE9K8DMoyPtp3YHBwtm'),
  ('Charlie', 'Bloggs', 'Charlie@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS'),
  ('Smith', 'SamSmith', 'Sam@gmail.com', '$2a$12$Cn1CjQlVQzW7J4CjQQYnk.BSuYcQ0iEU6EYHELimyNFi8XIdnFhxm'),
  ('lexlor', 'Taylor', 'Lex@gmail.com', '$2a$12$9jSfrDvCkn6P1Lbt/OJJRu0q8vAWvwX.TlquqL4Mnow6vZfppZOIS'),
  ('wippy', 'PingIn', 'Ping@gmail.com', '$2a$12$m8AvGnwabKCrVmWDw6qov.ttrN3uZ71PVGA/j2CHHl1/h.IOzJj/G');
COMMIT;
