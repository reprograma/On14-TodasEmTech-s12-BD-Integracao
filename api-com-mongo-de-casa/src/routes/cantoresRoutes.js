const express = require("express");
const controller = require("../controller/cantoresController");
const router = express.Router();


router.get("/all", controller.getAll);
router.get("/:id", controller.getById);
router.post("/create", controller.create);

module.exports = router; 