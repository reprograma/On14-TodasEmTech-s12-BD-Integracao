const express = require("express");
const router = express.Router();
const controller = require("../controllers/artistasController");

router.get("/all", controller.getAll); //endpoint
router.post("/create", controller.createArtista);
router.get("/:id", controller.artistaId)

module.exports = router;
