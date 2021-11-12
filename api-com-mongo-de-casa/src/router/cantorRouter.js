const express = require('express')
const router = express.Router()

const controller = require("../controller/cantorController")

router.get("/all", controller.getAll)
router.post("/creat", controller.creatCantor)
router.get("/:id", controller.cantorPorId)

module.exports = router