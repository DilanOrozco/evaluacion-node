const CreateTiquetera = require('../../application/uses-cases/CreateTiquetera')
const DeleteTiquetera = require('../../application/uses-cases/DeleteTiquetera')
const GetTiqueteraById = require('../../application/uses-cases/GetTiqueteraById')
const GetTiqueteras = require('../../application/uses-cases/GetTiqueteras')
const TiqueteraRepository = require('../repositories/TiqueteraRepository')


const TiqueteraRepositoryUC = new TiqueteraRepository()

const createTiquetera = async (req, res) => {
    try {
        const createTiqueteraUC = new CreateTiquetera(TiqueteraRepositoryUC)
        const tiquetera = await createTiqueteraUC.execute(req.body)
        return res.status(201).json(tiquetera)
    } catch (err) {
        res.status(500).json({ Error: err.message })
    }
}

const getTiqueteras = async (req, res) => {
    try {
        const getTiqueterasUC = new GetTiqueteras(TiqueteraRepositoryUC);
        const tiqueteras = await getTiqueterasUC.execute()
        return res.json(tiqueteras)
    } catch (err) {
        return res.status(500).json({ Error: err.message })
    }
}

const getTiqueteraById = async (req, res) => {
    try {
        const getTiqueteraByIdUC = new GetTiqueteraById(TiqueteraRepositoryUC)
        const tiquetera = await getTiqueteraByIdUC.execute(req.params.id)
        return res.json(tiquetera)
    }catch(err){
        return res.status(500).json({Error : err.message})
    }
}

const deleteTiquetera = async (req, res) => {
    try {
        const deleteTiqueteraUC = new DeleteTiquetera(TiqueteraRepositoryUC)
        const tiquetera = await deleteTiqueteraUC.execute(req.params.id)
        return res.json({message : 'tiquetera eliminada', tiquetera})
    }catch(err){
        return res.status(500).json({Error : err.message})
    }
}


module.exports = { createTiquetera, getTiqueteras, getTiqueteraById, deleteTiquetera }