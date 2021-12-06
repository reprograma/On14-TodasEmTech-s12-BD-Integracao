const express = require('express')
const router = express.Router()
const controller = require ("../controller/singerControlle")

router.get("/all", controller.getAll)
router.post("/create", controller.createSinger)
router.get("/:id", controller.singerForId)
router.get("/title", controller.singerByName)
router.patch("/update/:id", controller.updateSingerById)
router.delete("/delete/:id", controller.deleteSingerById)

module.exports = router