import React from 'react';
import { ScrollView, View } from 'react-native';
import ItemService from '../../services/items/item.service';
import { ButtonFab } from './components/button.fab';
import DialogItem from './components/dialog.item';
import { Item } from './components/item';

export function TodoList() {

    const [items, addItem] = React.useState([]);
    const [visible, setVisible] = React.useState(false);


    const create =  async (text) => {
       await ItemService.create(text);
    //    return Promise.resolve();
    }

    return (
        <>
        <ScrollView>
            <View>
                { items.map( (item) => <Item title={item} /> ) }
            </View>
            <DialogItem visibleprops={visible} onPress={ async (text) =>  {
                    setVisible(false);
                    await create(text).then(res => {
                        console.log("dwdwd", res);
                    });
                }
            } />
        </ScrollView>
        <ButtonFab onPress={() => setVisible(true)}  />
        </>
    );
}