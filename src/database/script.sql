-- drop user 'melodias'@'localhost'; 
create user 'melodias'@'localhost' identified by '01292931Jjsm*';
grant all privileges on *.* to 'melodias'@'localhost';

create database melodiasSemFronteiras;
use melodiasSemFronteiras;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
sobrenome varchar(50),
email varchar(264) unique,
senha varchar(50)
);

select * from usuario;

truncate usuario;
