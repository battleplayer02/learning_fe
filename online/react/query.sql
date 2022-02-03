Create table login( 
    id serial primary key, 
    username varchar not null unique,
    password varchar not null unique 
);

insert into login values(1, 'admin', 'admin');

select * from login;

insert into login (
    username,
    password
) values (
    'himanshu',
    '123456'
);