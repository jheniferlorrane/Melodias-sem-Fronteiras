var database = require("../database/config")

function obter(limite_linhas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obter(): ", limite_linhas)
    var instrucaoSql = ` select usuario.nome as nome,
    sum(pontuacao.pontuacao) as totalPontuacao
    from usuario join pontuacao on idUsuario = fkUsuario
    group by usuario.nome
    order by totalPontuacao desc
    limit ${limite_linhas}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obter,
}