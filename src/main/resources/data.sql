INSERT INTO PUBLIC.PLANT
(id,
 user_name,
 plant_name,
 description,
 photo,
 location,
 contact,
 available)
VALUES (1,'Dia', 'Krókusz', 'Kedves tavaszi virág', 'plant1.jpg', 'Budapest IV. kerület', 'krokusz@krokusz.com', true);
INSERT INTO PUBLIC.PLANT (id,
                          user_name,
                          plant_name,
                          description,
                          photo,
                          location,
                          contact,
                          available)
VALUES (2,'Eszter', 'Anyósnyelv', 'zöld', 'plant1.jpg', 'Gödöllő', 'eszter@eszter.com', true);
INSERT INTO PUBLIC.COMMENT (id, PLANT_ID, MESSAGE, USER_NAME, TIME_STAMP)
VALUES (1, 1, 'Hali ez nekem nagyon tetszik', 'Enikő', CURRENT_TIMESTAMP());
INSERT INTO PUBLIC.COMMENT (id, PLANT_ID, MESSAGE, USER_NAME, TIME_STAMP)
VALUES (2, 2, 'Uhhh de szép ez nekem kell', 'Berni', CURRENT_TIMESTAMP())


