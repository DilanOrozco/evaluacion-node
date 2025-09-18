const express = require('express')
const Router = express.Router()
const tiqueteraControllers = require('../controllers/TiqueteraControllers')

Router.post('/', tiqueteraControllers.createTiquetera)
Router.get('/', tiqueteraControllers.getTiqueteras)
Router.get('/:id', tiqueteraControllers.getTiqueteraById)
Router.delete('/:id', tiqueteraControllers.deleteTiquetera)
Router.put('/:id', tiqueteraControllers.updateTiquetera)

module.exports = Router