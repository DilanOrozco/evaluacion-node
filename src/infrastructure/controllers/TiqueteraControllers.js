const CreateTiquetera  = require('../../application/uses-cases/CreateTiquetera')
const TiqueteraRepository = require('../repositories/TiqueteraRepository')

const TiqueteraRepositoryUC = new TiqueteraRepository()

const createTiquetera = async(req, res)=>{
    try{
        const createTiqueteraUC = new CreateTiquetera(TiqueteraRepositoryUC)
        const tiquetera = await createTiqueteraUC.execute(req.body)
        return res.status(201).json(tiquetera)
    }catch(err){
        res.status(500).json({Error : err.message})
    }
    

}


module.exports = {createTiquetera}