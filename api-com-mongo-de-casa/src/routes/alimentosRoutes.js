const express = require('express');
const router = express.Router();

const controller = require('../controller/alimentosController')

router.get('/', controller.getAll)
router.get('/alimento', controller.getByNome)
router.get('/mes', controller.getBySeason)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.updateById)
router.delete('/:id', controller.deletar)

module.exports = router;