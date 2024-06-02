var rankingModel = require("../models/rankingModel");

function obter(req, res) {
    rankingModel.obter()
        .then(
            function (resultadoObter) {
                console.log(`\nResultados encontrados: ${resultadoObter.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoObter)}`);

                if (resultadoObter.length == 1) {
                    console.log(resultadoObter);

                    res.json({
                        id: resultadoObter[0].idranking,
                        email: resultadoObter[0].email,
                        nome: resultadoObter[0].nome
                    });

                } else{
                    res.status(403).send("Não tem nada no banco");
                }
            })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar a plotagem do grafico! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    obter,
}