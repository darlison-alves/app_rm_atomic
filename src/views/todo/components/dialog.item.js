import React from 'react';
import { Button, Dialog, Paragraph, Portal, TextInput } from "react-native-paper";

const DialogItem = ({ visibleprops = false, onPress }) => {
    const [text, setText] = React.useState('');
    return(
        <Portal>
            <Dialog visible={visibleprops} >
                <Dialog.Title>Novo Item</Dialog.Title>
                <Dialog.Content>
                    <TextInput label="Descrição" value={text} onChangeText={text => setText(text)} />                    
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => {
                        onPress(text);
                        setText('');
                    } } >Salva</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default DialogItem;