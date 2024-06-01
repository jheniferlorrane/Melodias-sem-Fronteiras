var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/guardar", function (req, res) {
    pontuacaoController.guardar(req, res);
});

module.exports = router;