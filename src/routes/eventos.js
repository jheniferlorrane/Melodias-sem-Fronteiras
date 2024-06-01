var express = require("express");
var router = express.Router();

var eventosController = require("../controllers/eventosController");

router.post("/eventos", function (req, res) {
    eventosController.registrar(req, res);
})

module.exports = router;