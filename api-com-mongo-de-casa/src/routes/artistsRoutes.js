const express = require("express");
const controller = require("../controllers/artistsController");

const router = express.Router();

router.get("/all", controller.getAllArtists);
router.get("/:id", controller.getArtistsById);
router.post("/create", controller.createArtists);
router.patch("/update/:id", controller.updateArtists);
router.delete("/delete/:id", controller.deleteArtists);

module.exports = router;
