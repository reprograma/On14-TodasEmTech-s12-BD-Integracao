const express = require("express")
const router = express.Router();
const controller = require("../controllers/musicControllers")

router.get("/all", controller.getAll);
router.get("/:id", controller.getById);
router.post("/create", controller.createArtist);


module.exports = router