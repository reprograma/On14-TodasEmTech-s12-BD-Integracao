const express = require("express")

const router = express.Router()

const controller = require("../controller/musicascontroller")

router.get("/", controller.getAll)
router.get("/:id", controller.musicaPorId)

router.post("/create", controller.createMusic)

router.patch("/update/:id", controller.updateMusicById)
router.delete("/delete/:id", controller.deleteMusicById)

module.exports = router