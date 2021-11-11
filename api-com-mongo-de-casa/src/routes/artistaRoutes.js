const express = require('express');
const router = express.Router();
const controller = require('../controllers/artistaController');

router.get("/", controller.todosArtistas);
router.get("/:id", controller.artistaPorId);

router.post("/criar", controller.criarArtista);

router.patch("/atualizar/:id", controller.atualizarArtista);

router.delete("/deletar/:id", controller.deletarArtista);

module.exports = router
