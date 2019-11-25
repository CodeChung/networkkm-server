BEGIN;

TRUNCATE
  users
  RESTART IDENTITY CASCADE;

INSERT INTO users (first_name, last_name, email, password, friends)
VALUES
  ('Keith', 'Marko', 'kmarko30@aol.com', '$2a$12$S8aZJkKbw/VggLPWZizy7uhJmovTMf3D0GR.AC0vgDftk5PxfIEK2', '{2,3,4,5,6}'),
  ('Harry', 'Chung', 'hc9825@gmail.com', '$2a$12$gV3yYtNzu.6DgBeP1PcSHeiJT.DYURnB0dlE9K8DMoyPtp3YHBwtm', '{1,4}'),
  ('Barry', 'Bonds', 'harry.chung94@gmail.com', '$2a$12$gV3yYtNzu.6DgBeP1PcSHeiJT.DYURnB0dlE9K8DMoyPtp3YHBwtm', '{}'),
  ('Charlie', 'AAA', 'Charlie@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,2}'),
  ('Charlie', 'AAB', 'Charldie@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,2}'),
  ('Charlie', 'AAC', 'Charlisrgafe@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,2,3,4,6}'),
  ('Charlie', 'AAD', 'Charlie@gmaagadstdafil.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,2,3,4,5}'),
  ('Charlie', 'AAE', 'Charlie@gmail.cdsdom', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,2,3,4,5,6}'),
  ('Charlie', 'CAA', 'Charlie@gmail.cdoma', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{3,4,5,6,7,2}'),
  ('Charlie', 'CAB', 'Charlie@gmaail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,2,3,4,5,11}'),
  ('Charlie', 'CAC', 'Charlie@gmail.csom', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,3,7,8,20,2}'),
  ('Charlie', 'CAD', 'Chargfdlie@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{111,15,6,21,2}'),
  ('Charlie', 'CAE', 'Chardlie@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,3,4,7,9,2}'),
  ('Charlie', 'DAA', 'Charliefd@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,8,12,15,17,2}'),
  ('Charlie', 'DAB', 'Charlie@gfdmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{14,12,13,15,20,4,2}'),
  ('Charlie', 'DAC', 'Charliye@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,2}'),
  ('Charlie', 'DAD', 'Charlie@gmadfil.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,3,9,5,4,21,2}'),
  ('Charlie', 'DAE', 'Charlie@gmaild.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,11,13,22}'),
  ('Charlie', 'EAA', 'Charlie@gmail.dfcom', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{12,11,2}'),
  ('Charlie', 'EAB', 'Charlie@gmails.codm', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{10,1,2}'),
  ('Charlie', 'EAC', 'Charlie@gmaigl.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{11,12,13}'),
  ('Charlie', 'EAD', 'Chagxzcrlie@gmail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{13,21,19,17}'),
  ('Charlie', 'EAE', 'Charliecfdsg@gmasgfdil.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,22}'),
  ('Charlie', 'Bloggs', 'Charlie@gmabcxil.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,20}'),
  ('Charlie', 'BAAs', 'Charlie@gmail.fgssdfddcom', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{11,2}'),
  ('Charlie', 'BAB', 'Charlie@gmsail.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{11,22}'),
  ('Charlie', 'BAC', 'Charlie@gmagsdil.com', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,12}'),
  ('Charlie', 'BAD', 'Charlie@gmail.gfdcom', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{14,2}'),
  ('Charlie', 'BAE', 'Charlie@gmail.comsdf', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{1,24}'),
  ('Charlie', 'BAF', 'Charlie@gmail.cogsfddm', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', '{11,20}');

INSERT INTO blog (author, title, html, readers)
VALUES
  (1, 'Blog 1', 'dabasbas', '{}'),
  (1, 'Blog 2', 'dabasbas', '{}'),
  (1, 'Blog 3', 'dabasbas', '{}'),
  (1, 'Blog 4', 'dabasbas', '{}'),
  (1, 'Blog 5', 'dabasbas', '{}'),
  (1, 'Blog 7', 'dabasbas', '{}'),
  (2, 'Blog 8', 'dabasbas', '{}'),
  (2, 'Blog 9', 'dabasbas', '{}'),
  (2, 'Blog 10', 'dabasbas', '{}'),
  (2, 'Blog 11', 'dabasbas', '{}');

INSERT INTO blog_comments (blog_id, user_id, comment)
VALUES
  (1, 1, 'Great Post!!'),
  (1, 2, 'I agree'),
  (1, 3, 'Wow I love it'),
  (9, 1, 'Now thats a blog post'),
  (10, 1, 'Great Post!!'),
  (10, 4, 'Why did you write this?'),
  (10, 5, 'Preach!!!'),
  (10, 6, 'Ive been saying the same thing for years'),
  (2, 3, 'You should become a writer'),
  (2, 4, 'You should shut your mouth'),
  (8, 6, 'Great Post!!'),
  (2, 4, 'Great Post!!'),
  (5, 4, 'Great Post!!'),
  (1, 8, 'Great Post!!'),
  (1, 9, 'Great Post!!');
  

COMMIT;
