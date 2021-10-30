const express = require("express");
const controller = require("../controller/musicaController");
const router = express.Router();

router.get("/all", controller.obterMusicas);
router.get("/:id", controller.musicaPorId);
router.post("/create", controller.criarMusica);

module.exports = router;
