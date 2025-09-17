class CreateTiquetera{
    constructor(tiqueteraRepository){
        this.tiqueteraRepository = tiqueteraRepository
    }

    async execute(data){
        return await this.tiqueteraRepository.create(data)
    }
}

module.exports = CreateTiquetera