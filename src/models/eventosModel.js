var database = require("../database/config")

function registrar(nomeEvento, valorIngresso, momentoInscricao, ingresso, fkUsuario) {
    console.log("ACESSEI O EVENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar():", nomeEvento, valorIngresso, momentoInscricao, ingresso, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO evento (nomeEvento, valorIngresso, momentoInscricao, ingresso, fkUsuario) VALUES ('${nomeEvento}', '${valorIngresso}', now(), ${ingresso}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
};