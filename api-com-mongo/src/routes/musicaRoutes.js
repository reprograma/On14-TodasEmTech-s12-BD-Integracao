const express = require('express')

const router = express.Router()

const controller = require("../controller/musicaController")
//importa o controller

router.get("/all", controller.getAll)
router.post("/create", controller.createMusic)
//cria o endpoint

module.exports = router