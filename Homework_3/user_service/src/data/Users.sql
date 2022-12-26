CREATE TABLE IF NOT EXISTS users(
    ID SERIAL PRIMARY KEY,
    login VARCHAR(255),
    password VARCHAR(255),
    age INT,
    isDeleted BOOLEAN
);

INSERT INTO users VALUES (1, 'JohnDoe', 'john1234', 26, false);
INSERT INTO users VALUES (2, 'JaneDoe', 'jane1234', 20, false);
INSERT INTO users VALUES (3, 'JackNich', 'jack1234', 42, false);
INSERT INTO users VALUES (4, 'TomSmith', 'tom1234', 19, false);
INSERT INTO users VALUES (5, 'KateSmith', 'kate1234', 52, false);
