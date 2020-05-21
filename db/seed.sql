create table if not exists users (
    user_id serial primary key,
    email varchar(100),
    password varchar(100),
    first_name varchar(50),
    last_name varchar(50) 

);

CREATE TABLE IF NOT EXISTS event(
    event_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    title VARCHAR(250),
    date SMALLINT(30),
    start_time SMALLINT(10),
    end_time SMALLINT(10),
    location VARCHAR(100),
    description VARCHAR(200),
    rsvp BOOLEAN,
    img IMAGE
);