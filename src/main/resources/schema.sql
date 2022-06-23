DROP TABLE IF EXISTS comment;
CREATE TABLE comment
(
    id         int      NOT NULL PRIMARY KEY,
    plant_id   int      NOT NULL,
    message    VARCHAR   NOT NULL,
    user_name  VARCHAR   NOT NULL,
    time_stamp TIMESTAMP NOT NULL
);

DROP TABLE IF EXISTS plant;
CREATE TABLE plant
(
    id          int PRIMARY KEY,
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
VALUES (1, 'Dia', 'Krókusz', 'Kedves tavaszi virág', 'plant1.jpg', 'Budapest IV. kerület', 'krokusz@krokusz.com', true);
INSERT INTO plant
VALUES (1, 'Eszter', 'Anyósnyelv', 'zöld', 'plant1.jpg', 'Gödöllő', 'eszter@eszter.com', true);
INSERT INTO comment VALUES (1, 1, 'Hali ez nekem nagyon tetszik', 'Enikő', CURRENT_TIMESTAMP());
INSERT INTO comment VALUES (2, 2, 'Uhhh de szép ez nekem kell', 'Berni', CURRENT_TIMESTAMP() )