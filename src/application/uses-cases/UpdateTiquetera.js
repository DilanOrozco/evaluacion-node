class UpdateTiquetera{
    constructor(tiqueteraRepository){
        this.tiqueteraRepository = tiqueteraRepository
    }

    async execute(id, data){
        return await this.tiqueteraRepository.update(id, data)
    }
}