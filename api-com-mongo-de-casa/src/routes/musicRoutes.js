const express = require("express");
const controller = require("../controllers/musicController");

const router = express.Router();

router.get("/all", controller.getAllMusics);
router.get("/:id", controller.getMusicsById);
router.post("/create", controller.createMusics);

module.exports = router;
