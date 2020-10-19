import React from 'react';
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";

const DialogItem = ({ visibleprops = false }) => {

    const [visible, setVisible] = React.useState(visibleprops);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return(
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} >
                <Dialog.Title>Novo Item</Dialog.Title>
                <Dialog.Content>

                    <Paragraph>dwodnwod</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog} >Salva</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default DialogItem;