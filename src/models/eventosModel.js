var database = require("../database/config")

function registrar(nomeUsuario, nomeEvento, valorIngresso, ingresso, fkUsuario) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar():", nomeUsuario, nomeEvento, valorIngresso, ingresso, fkUsuario);
    var instrucaoSql = `
        INSERT INTO evento (nomeUsuario, nomeEvento, valorIngresso, ingresso, fkUsuario) VALUES ('${nomeUsuario}', '${nomeEvento}', ${valorIngresso}, ${ingresso}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
};