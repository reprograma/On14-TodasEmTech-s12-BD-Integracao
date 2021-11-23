const express = require("express")
const router = express.Router()

const controller = require("../controllers/musicaController")

router.get("/all", controller.obterMusicas)
router.post("/create", controller.createMusic)
router.patch("update/:id", controller.updateMusicById)
router.get("/titulo", controller.musicaPorTitulo)
router.get("/:id", controller.musicaPorId)
router.delete("/delete/:id", controller.deleteMusicById)

module.exports = router