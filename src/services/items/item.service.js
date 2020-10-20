import ItemRepository from '../../domain/repository/item.repository'
class ItemService {
    constructor() {
        this._repository = new ItemRepository();
    }

    async create(text) {
        await this._repository.create(text);
    }
}

export default new ItemService();