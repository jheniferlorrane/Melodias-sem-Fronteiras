var database = require("../database/config")

function obter(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obter(): ", email, senha)
    var instrucaoSql = ` select usuario.nome,
    sum(pontuacao.pontuacao) as 'total de pontuação'
    from usuario join pontuacao on idUsuario = fkUsuario
    group by usuario.nome
    order by 'total de pontuação' desc
    limit 5
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obter,
}