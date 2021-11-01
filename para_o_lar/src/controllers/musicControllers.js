const MusicSchema = require("../models/musicSchema");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
  try {
    const allMusic = await MusicSchema.find();
    res.status(200).send(allMusic)
  } catch (error) {
    res.sendStatus(500)
  }
}


module.exports = {
  getAll
}