create table if not exists users (
    user_id serial primary key,
    email varchar(100),
    password varchar(100),
    first_name varchar(50),
    last_name varchar(50) 

);