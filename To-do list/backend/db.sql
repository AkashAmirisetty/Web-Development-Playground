create database todo;
use todo;


create table todoItems(
ID int primary key auto_increment,
itemDescription varchar(100),
completed boolean default false
);
select * from todoItems;

insert into todoItems(itemDescription) values ('Inserted from mysql');

update todoItems set itemDescription='editing' where ID=3;
delete from todoItems where ID=3;