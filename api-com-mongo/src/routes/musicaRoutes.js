const express = require("express");
const controller = require("../controller/musicaController");
const router = express.Router();

router.get("/todas", controller.obterMusicas);
router.get("/:id", controller.musicaPorId);
router.post("/criar", controller.criarMusica);
router.patch("/atualizar/:id", controller.atualizarMusicaPorId);
router.delete("/deletar/:id", controller.removerMusica);

module.exports = router;
