const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema(
{
    _id: mongoose.Schema.Types.ObjectId,

    artist:{
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true,
    }

}, { timestamps: true });

module.exports = mongoose.model('artist', ArtistSchema);