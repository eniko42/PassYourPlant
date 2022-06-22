DROP TABLE IF EXISTS comment;
CREATE TABLE comment
(
    id         UUID      NOT NULL PRIMARY KEY,
    plant_id   UUID      NOT NULL,
    message    VARCHAR   NOT NULL,
    user_name  VARCHAR   NOT NULL,
    time_stamp TIMESTAMP NOT NULL
);

DROP TABLE IF EXISTS plant;
CREATE TABLE plant
(
    id          UUID PRIMARY KEY,
    user_name   VARCHAR NOT NULL,
    plant_name  VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    photo       VARCHAR NOT NULL,
    location    VARCHAR NOT NULL,
    contact     VARCHAR NOT NULL,
    available   BOOLEAN NOT NULL
);

ALTER TABLE comment
    ADD FOREIGN KEY (plant_id) REFERENCES plant (id);

INSERT INTO plant
VALUES (RANDOM_UUID(), 'Dia', 'Krókusz', 'Kedves tavaszi virág', 'plant1.jpg', 'Budapest IV. kerület', 'krokusz@krokusz.com', true);
INSERT INTO plant
VALUES (RANDOM_UUID(), 'Eszter', 'Anyósnyelv', 'zöld', 'plant1.jpg', 'Gödöllő', 'eszter@eszter.com', true);
INSERT INTO comment VALUES (RANDOM_UUID(), '7faceeca-d4c5-41b7-90e6-f5916da87a06', 'Hali ez nekem nagyon tetszik', 'Enikő', CURRENT_TIMESTAMP());
--INSERT INTO comment VALUES ( RANDOM_UUID(), 2, 'Uhhh de szép ez nekem kell', 'Berni', CURRENT_TIMESTAMP() )