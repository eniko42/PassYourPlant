DROP TABLE IF EXISTS PUBLIC.comment;
CREATE TABLE PUBLIC.comment
(
    id         int NOT NULL PRIMARY KEY,
    plant_id   int               NOT NULL,
    message    VARCHAR           NOT NULL,
    user_name  VARCHAR           NOT NULL,
    time_stamp TIMESTAMP
);

DROP TABLE IF EXISTS PUBLIC.plant CASCADE ;
CREATE TABLE PUBLIC.plant
(
    id         int NOT NULL PRIMARY KEY,
    user_name   VARCHAR NOT NULL,
    plant_name   VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    photo       VARCHAR NOT NULL,
    location    VARCHAR NOT NULL,
    contact     VARCHAR NOT NULL,
    available   BOOLEAN NOT NULL
);

ALTER TABLE PUBLIC.comment
    ADD FOREIGN KEY (plant_id) REFERENCES PUBLIC.plant (id);

