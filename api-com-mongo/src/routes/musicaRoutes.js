
const express = require("express");

const router = express.Router()

const exports = router

const express = require("express")

const router = express.Router()

<<<<<<< HEAD
const controller = require("../controller/musicaController")

router.get("/all", controller.getAll)
router.post("/create", controller.createMusic)
router.get("/titulo", controller.musicaPorTitulo)

router.get("/:id", controller.musicaPorId)
router.patch("/update/:id", controller.updateMusicById)
router.delete("/delete/:id", controller.deleteMusicById)
module.exports = router
=======
module.exports = router

>>>>>>> f9aaf0d46d94497468c5459521a7e22c8331065b
