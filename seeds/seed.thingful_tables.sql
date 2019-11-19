BEGIN;

TRUNCATE
  users
  RESTART IDENTITY CASCADE;

INSERT INTO users (first_name, last_name, email, password, friends)
VALUES
  ('Keith', 'Marko', 'kmarko30@aol.com', '$2a$12$S8aZJkKbw/VggLPWZizy7uhJmovTMf3D0GR.AC0vgDftk5PxfIEK2', '{2,3,4}'),
  ('Harry', 'Chung', 'hc9825@gmail.com', '$2a$12$gV3yYtNzu.6DgBeP1PcSHeiJT.DYURnB0dlE9K8DMoyPtp3YHBwtm', '{1,3}'),
  ('Charlie', 'Bloggs', 'Charlie@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,2}'),
  ('Smith', 'SamSmith', 'Sam@gmail.com', '$2a$12$Cn1CjQlVQzW7J4CjQQYnk.BSuYcQ0iEU6EYHELimyNFi8XIdnFhxm', '{1,5,6,7}'),
  ('lexlor', 'Taylor', 'Lex@gmail.com', '$2a$12$9jSfrDvCkn6P1Lbt/OJJRu0q8vAWvwX.TlquqL4Mnow6vZfppZOIS', '{1,2,3}'),
  ('wippy', 'PinIn', 'Ping@gmail.com', '$2a$12$m8AvGnwabKCrVmWDw6qov.ttrN3uZ71PVGA/j2CHHl1/h.IOzJj/G','{1,2,3,4}'),
  ('wipcxpy', 'ingIn', 'sing@gmail.com', '$2a$12$m8AvGnwabKCrVmWDw6qov.ttrN3uZ71PVGA/j2CHHl1/h.IOzJj/G', '{1,2,3,4,5}'),
  ('wipsapy', 'PigIn', 'fing@gmail.com', '$2a$12$m8AvGnwabKCrVmWDw6qov.ttrN3uZ71PVGA/j2CHHl1/h.IOzJj/G', '{4}'),
  ('wippey', 'PingIn', 'vcing@gmail.com', '$2a$12$m8AvGnwabKCrVmWDw6qov.ttrN3uZ71PVGA/j2CHHl1/h.IOzJj/G','{}');
COMMIT;
