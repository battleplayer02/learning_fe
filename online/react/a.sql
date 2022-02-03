select * from sample;



create table sample(
    name varchar PRIMARY key
)

DROP TABLE sample;
delete from sample;

-- truncate 
-- delete 

-- Primary key >> UNIQUE && not null 

INSERT INTO sample (name) VALUES ('test1');
INSERT INTO sample (name) VALUES ('test2');
INSERT INTO sample (name) VALUES ('test3');
INSERT INTO sample (name) VALUES ('test4');
INSERT INTO sample (name) VALUES ('test5');

INSERT INTO sample (name) VALUES (null);

select * from sample;



