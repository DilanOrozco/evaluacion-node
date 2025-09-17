const TiqueteraModel = require('../../domain/models/TiqueteraModel')

class TiqueteraRepository{
    async create(data){
        const tiquetera = new TiqueteraModel(data)
        return await tiquetera.save()
    }
}

module.exports = TiqueteraRepository