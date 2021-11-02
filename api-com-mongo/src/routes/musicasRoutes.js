const express = require('express')
const router = express.Router()
const  controller = require('../controllers/musicasController')

router.get("/all", controller.getAll)
//router.post("creat")
module.exports = router
