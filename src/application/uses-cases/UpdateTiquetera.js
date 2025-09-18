class UpdateTiquetera {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository
    }

    async execute(id, data) {

        const tiquetera = await this.tiqueteraRepository.findById(id)

        if (!tiquetera){
            throw new Error('tiquetera no encontrada')
        } 
        
        const TotalTransacciones = (tiquetera.TotalTransacciones || 0 ) +1

        const dataTiquetera = {
            ...data, 
            'TotalTransacciones' : TotalTransacciones
        }

        return await this.tiqueteraRepository.update(id, dataTiquetera)
    }
}

module.exports = UpdateTiquetera