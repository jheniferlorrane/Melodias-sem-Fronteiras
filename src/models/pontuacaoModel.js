var database = require("../database/config")

function guardar(pontuacao, fkUsuario) {
    console.log("ACESSEI O PONTUACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function guardar():", pontuacao, fkUsuario);
    var instrucaoSql = `
        INSERT INTO pontuacao (pontuacao, fkUsuario) VALUES (${pontuacao}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    guardar,
};