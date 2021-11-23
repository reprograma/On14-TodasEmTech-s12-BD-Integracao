//11
const express = require('express')
const router = express.Router()
const controller = require("../controller/controller")

router.get("/all", controller.getAll)
router.get("/artistas/:id", controller.artistaById)
router.post("/artistas/create", controller.createArtista)
router.delete("/delete/:id", controller.deleteArtista)
//12
module.exports = router