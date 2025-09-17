const express = require('express');
const cors = require('cors');
const tiqueteraRoutes = require('../infrastructure/routes/tiqueteraRoutes')

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/tiquetera', tiqueteraRoutes)



module.exports = app