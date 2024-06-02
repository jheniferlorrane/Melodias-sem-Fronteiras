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

create table contato (
idContato int auto_increment primary key,
nome varchar(50),
email varchar(264) unique,
descricao varchar(2640)
);

create table evento (
idEvento int auto_increment,
nomeEvento varchar(100),
valorIngresso varchar(100),
ingresso char(10) unique,
fkUsuario int,
primary key (idEvento, fkUsuario),
foreign key (fkUsuario) references usuario(idUsuario)
);

create table audicao (
idAudicao int auto_increment,
nomeProjeto varchar(100),
numeroInscricao char(10) unique,
fkUsuario int,
primary key (idAudicao, fkUsuario),
foreign key (fkUsuario) references usuario(idUsuario)
);

create table pontuacao (
idPontuacao int auto_increment,
pontuacao int,
fkUsuario int,
primary key (idPontuacao, fkUsuario),
foreign key (fkUsuario) references usuario(idUsuario)
);

select * from usuario; 
select * from contato;
select * from evento; 
select * from pontuacao; 

select usuario.nome,
evento.nomeEvento,
evento.ingresso
from usuario join evento on fkUsuario = idUsuario;

select usuario.nome,
sum(pontuacao.pontuacao) as 'total de pontuação'
from usuario join pontuacao on idUsuario = fkUsuario
group by usuario.nome
order by 'total de pontuação' desc
limit 5;