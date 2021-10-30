const mongoose = require("mongoose");

const MONGODB_URI = "mongodb+srv://apimusic:aa2bb2cc2@cluster0.g8xpx.mongodb.net/Stream?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco conectado!");
  } catch (error) {
console.log(error.message);
  }
};

module.exports = {
    connect
}