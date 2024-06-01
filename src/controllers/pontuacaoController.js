var pontuacaoModel = require("../models/pontuacaoModel");

function guardar(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (pontuacao == undefined) {
        res.status(400).send("o pontuacao está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu ifUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo pontuacaoModel.js
        pontuacaoModel.guardar(pontuacao, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    guardar,
}