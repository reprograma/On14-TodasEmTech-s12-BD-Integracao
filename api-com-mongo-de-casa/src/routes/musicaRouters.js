const express = require("express")

const router = express.Router()

const controller = require("../controller/musicaControlles")

router.get("/all", controller.getAll)

router.post("/create", controller.createMusic)

router.get("/titulo", controller.musicaPorTitulo)



router.patch("/update/:id", controller.updateMusicById)

router.delete("/delete/:id", controller.deleteMusicById)


module.exports = router