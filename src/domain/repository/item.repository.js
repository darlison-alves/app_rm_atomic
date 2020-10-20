import Realm from 'realm';
import { Item } from '../model/item.model';

class ItemRepository {
    _realm;
    constructor() {
        this._realm = new Realm({path: 'ItemDatabase.realm', schema: [ Item ]});
    }

    create(item) {
        this._realm.write(()=> {
            var ID = this._realm.objects('Item').sorted('id', true);
            console.log("ID", ID)
            const newItem = this._realm.create('Item', {
                id: ID,
                description: item
            });
            console.log('newItem', newItem);
        });
    }
}

export default ItemRepository;