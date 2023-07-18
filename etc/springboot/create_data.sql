DROP TABLE IF EXISTS USERS;
create table USERS(
	ID number(5) primary key,
	USERNAME varchar2(30),
	PASSWORD varchar2(100),
	EMAIL varchar2(30),
	CRAETE_DATE TIMESTAMP(26, 6),
	ROLE VARCHAR(255)
)
