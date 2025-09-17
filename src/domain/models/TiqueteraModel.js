const mongoose = require('mongoose')

const tiqueteraSchema = new mongoose.Schema({
    nroTiquetera : {
        type : Number
    }, 
    cliente : {
        type: String
    },
    saldo : {
        type: Number
    },
    TotalTransacciones : {
        type : Number
    }
})

const TiqueteraModel = mongoose.model('Tiquetera', tiqueteraSchema)

module.exports = TiqueteraModel