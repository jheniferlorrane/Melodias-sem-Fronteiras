var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.post("/obter", function (req, res) {
    rankingController.obter(req, res);
});

module.exports = router;