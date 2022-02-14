CREATE or replace FUNCTION sum_of_two_numbers(m integer, n integer) 
RETURNS integer AS $$
        BEGIN
                RETURN m + n;
        END;
$$ LANGUAGE plpgsql;



select sum_of_two_numbers(10,20);



CREATE FUNCTION FUN_TO_TEST () RETURNS double precision 
AS $TEST$ 
BEGIN 
   RETURN 4.29580; 
END;    
$TEST$  LANGUAGE PLPGSQL;


