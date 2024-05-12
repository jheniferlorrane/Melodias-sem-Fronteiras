var express = require("express");
var router = express.Router();

var melodiasController = require("../controllers/melodiasController");

router.get("/:empresaId", function (req, res) {
  melodiasController.buscarmelodiasPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  melodiasController.cadastrar(req, res);
})

module.exports = router;