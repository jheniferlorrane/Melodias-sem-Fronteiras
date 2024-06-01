var eventosModel = require("../models/eventosModel");

function registrar(req, res) {
    var nomeEvento = req.body.nomeEventoServer;
    var valorIngresso = req.body.valorIngressoServer;
    var ingresso = req.body.ingressoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (nomeEvento == undefined) {
        res.status(400).send("o nome do evento está undefined!");
    } else if (valorIngresso == undefined) {
        res.status(400).send("Seu valorIngresso está undefined!");
    } else if (ingresso == undefined) {
        res.status(400).send("Sua ingresso está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo eventosModel.js
        eventosModel.registrar(nomeEvento, valorIngresso, ingresso, fkUsuario)
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
    registrar,
}