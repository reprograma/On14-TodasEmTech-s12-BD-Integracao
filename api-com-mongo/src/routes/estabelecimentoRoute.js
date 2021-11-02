const express = require("express");
const controller = require("../controllers/estabelecimentoController");
const router = express.Router();

router.get("/tudo", controller.getAll);

router.get("/:id", controller.getId);

router.post("/criar", controller.criarEstabelecimento);

module.exports = router;