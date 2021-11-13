const express = require('express')
const router = express.Router()
const controller = require('../controller/artistaController')

router.get("/", controller.getAll)
router.get("/:id", controller.getById)

router.post("/criar", controller.createArtista)

router.patch("/atualizar/:id", controller.updateArtista)

router.delete("/deletar/:id", controller.deleteArtista)

module.exports = router
