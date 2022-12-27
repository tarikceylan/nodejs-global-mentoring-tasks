CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
    id UUID DEFAULT uuid_generate_v4(),
    login VARCHAR(255),
    password VARCHAR(255),
    age INT,
    is_deleted BOOLEAN,
    PRIMARY KEY(id)
);

INSERT INTO users(login, password, age, is_deleted) VALUES ('JohnDoe', 'john1234', 26, false);
INSERT INTO users(login, password, age, is_deleted) VALUES ('JaneDoe', 'jane1234', 20, false);
INSERT INTO users(login, password, age, is_deleted) VALUES ('JackNich', 'jack1234', 42, false);
INSERT INTO users(login, password, age, is_deleted) VALUES ('TomSmith', 'tom1234', 19, false);
INSERT INTO users(login, password, age, is_deleted) VALUES ('KateSmith', 'kate1234', 52, false);
