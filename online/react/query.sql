-- ZsM6RiKLmc7scgZFi2Nb
Create table login( 
    id serial primary key, 
    username varchar not null unique,
    password varchar not null unique 
);

insert into login values(1, 'admin', 'admin');


insert into login (
    username,
    password
) values (
    'abcd',
    '1234567'
);


select * from login;




INSERT INTO sample (name) VALUES ('test');

select * from sample;




















