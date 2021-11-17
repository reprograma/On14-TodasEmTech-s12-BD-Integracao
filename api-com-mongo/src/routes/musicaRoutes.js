const express = require("express")
const router = express.Router()

const controller = require("../controllers/musicaController")

router.get("/all", controller.obterMusicas)
router.post("/create", controller.createMusic)

router.patch("update/:id", controller.updateMusicById)

module.exports = router