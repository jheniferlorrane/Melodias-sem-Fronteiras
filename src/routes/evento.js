var express = require("express");
var router = express.Router();

var eventoController = require("../controllers/eventoController");

//Recebendo os dados do html e direcionando para a função evento de eventoController.js
router.post("/inscreverEvento", function (req, res) {
    eventoController.evento(req, res);
});

module.exports = router;