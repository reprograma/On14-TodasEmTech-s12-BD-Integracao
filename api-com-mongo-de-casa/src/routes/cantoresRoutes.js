const express = require("express");
const controller = require("../controller/cantoresController");
const router = express.Router();


router.get("/all", controller.getAll);
router.get("/:id", controller.getById);
router.post("/criar", controller.criarDb);

module.exports = router; 