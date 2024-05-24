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

create table receberNovidades (
idReceberNovidades int primary key auto_increment,
nome varchar(50),
email varchar(264) unique
);

create table notas (
idNotas int primary key auto_increment,
nota varchar(3) unique
);

create table cifras (
idCifras int auto_increment,
cifra char(1) unique,
fkNotas int,
primary key (idCifras, fkNotas),
foreign key (fkNotas) references notas(idNotas)
);

insert into notas(nota) values
('Dó'),
('Ré'),
('Mi'),
('Fá'),
('Sol'),
('Lá'),
('Si');

select * from notas;

insert into cifras(cifra, fkNotas) values
('C', 1),
('D', 2),
('E', 3),
('F', 4),
('G', 5),
('A', 6),
('B', 7);

select * from cifras;

select notas.nota, cifras.cifra
from notas join cifras on idNotas = fkNotas order by idNotas;