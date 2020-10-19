import React from 'react';
import { View } from 'react-native';
import { ButtonFab } from './components/button.fab';
import DialogItem from './components/dialog.item';
import { Item } from './components/item';

export function TodoList() {

    const [items, addItem] = React.useState([]);
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <View>
                { items.map( item => <Item title={item} /> ) }
            </View>
            <DialogItem visibleprops={visible} />
            <ButtonFab onPress={() => setVisible(true)} />
        </>
    );
}