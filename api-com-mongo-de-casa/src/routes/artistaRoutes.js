const express = require('express')
const router = express.Router()

const controller = require('../controller/artistaController')

router.get("/all", controller.getAll)
router.post("/create", controller.createArtist)
router.get("/name", controller.artistByName)

router.patch("/update/:id", controller.updateArtistById)
router.get("/:id", controller.getById)
router.delete("/delete/:id", controller.deleteArtistById)


module.exports = router