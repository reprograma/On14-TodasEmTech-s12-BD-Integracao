const express = require('express')
const router = express.Router()

const controller = require("../controller/filmeController")

router.get("/all", controller.getAll)

router.post("create", controller.createFilme)

router.get("/:id", controller.filmePorId)

module.exports =router