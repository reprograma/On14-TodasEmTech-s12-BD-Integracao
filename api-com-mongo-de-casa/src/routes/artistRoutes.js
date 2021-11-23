const express = require('express');
const artistController = require('../controllers/artistController');

const router = express.Router();

//@route /artists/
//@desc Listar todos os artistas
//@access Public
router.get('/', artistController.getAll);

//@route /artists/:id
//@desc Selecionar artista por ID
//@access Public
router.get('/:id', artistController.getById); 

//@route /artists/newArtistID
//@desc Adicionar um novo artista
//@access Public
router.post('/newArtist', artistController.postArtist);


module.exports = router;