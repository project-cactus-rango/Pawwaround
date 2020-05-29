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
    date varchar(30),
    start_time varchar(10),
    end_time varchar(10),
    location VARCHAR(100),
    description VARCHAR(3000),
    rsvp BOOLEAN,
    img VARCHAR(250)
)