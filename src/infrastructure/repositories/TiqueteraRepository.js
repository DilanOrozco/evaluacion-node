const TiqueteraModel = require('../../domain/models/TiqueteraModel')

class TiqueteraRepository{
    async create(data){
        const tiquetera = new TiqueteraModel(data)
        return await tiquetera.save()
    }

    async findAll(){
        return await TiqueteraModel.find()
    }

    async findById(id){
        return await TiqueteraModel.findById(id)
    }

    async delete(id){
        return await TiqueteraModel.findByIdAndDelete(id)
    }

    async update(id, data){
        return await TiqueteraModel.findByIdAndUpdate(id, data, {new : true})
    }
}

module.exports = TiqueteraRepository