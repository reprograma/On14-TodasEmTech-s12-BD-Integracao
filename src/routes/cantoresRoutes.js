const express = require("express")
const controller = require("../controller/cantoresController");
const router = express.Router();

router.get("/all", controller.getAll)

router.get("/:id", controller.findCantoresById)

router.post("/create", controller.createCantores)


module.exports = router