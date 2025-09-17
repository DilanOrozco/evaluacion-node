const express = require('express')
const Router = express.Router()
const tiqueteraControllers = require('../controllers/TiqueteraControllers')

Router.post('/', tiqueteraControllers.createTiquetera)

module.exports = Router