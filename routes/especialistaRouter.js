const especialistaController = require('../controllers/especialistaController.js')

const router = require('express').Router()

router.post('/addEspecialista', especialistaController.addEspecialista)
router.get('/allEspecialistas', especialistaController.getAllEspecialistas)

router.get('/:id', especialistaController.getOneEspecialista)
router.put('/:id', especialistaController.updateEspecialista)
router.delete('/:id', especialistaController.deleteEspecialista)

// router.get('/nome', especialistaController.getEspecialista)

module.exports = router