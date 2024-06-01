var express = require("express");
var router = express.Router();

var eventosController = require("../controllers/eventosController");

router.post("/registrar", function (req, res) {
    eventosController.registrar(req, res);
});

module.exports = router;