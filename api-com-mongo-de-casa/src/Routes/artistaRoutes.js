const express = require("express")

const router = express.Router()

const controller = require("../controller/artistasController")

router.get("/all", controller.getAll)
router.post("/create", controller.createArtist)
router.get("/:id", controller.artistaPorId)
router.patch("/update/:id", controller.updateArtistById)

module.exports = router