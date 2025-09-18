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
    observaciones : {
        type : String
    },
    TotalTransacciones : {
        type : Number
    }
})

const TiqueteraModel = mongoose.model('Tiquetera', tiqueteraSchema)

module.exports = TiqueteraModel