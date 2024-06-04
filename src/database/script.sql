-- drop user 'melodias'@'%'; 
create user 'melodias'@'%' identified by '01292931Jjsm*';
grant all privileges on *.* to 'melodias'@'%';

create database melodiasSemFronteiras;
use melodiasSemFronteiras;


create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50) not null,
sobrenome varchar(50) not null,
email varchar(264) unique not null,
senha varchar(50) not null
);

create table contato (
idContato int auto_increment primary key,
nome varchar(50) not null,
email varchar(264) not null,
descricao varchar(2640) not null
);

create table evento (
idEvento int auto_increment,
nomeEvento varchar(100) not null,
endereco varchar(100) not null,
valorIngresso varchar(100) not null,
ingresso char(10) unique not null,
fkUsuario int not null,
primary key (idEvento, fkUsuario),
foreign key (fkUsuario) references usuario(idUsuario)
);

create table pontuacao (
idPontuacao int auto_increment,
pontuacao int not null,
fkUsuario int not null,
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

select usuario.nome as nome,
sum(pontuacao.pontuacao) as totalPontuacao
from usuario join pontuacao on idUsuario = fkUsuario
group by usuario.nome
order by totalPontuacao desc
limit 5;