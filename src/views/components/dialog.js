import React from 'react';
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";

const DialogAlert = ({ paragraph, visibleprops = false }) => {

    const [visible, setVisible] = React.useState(visibleprops);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return(
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} >
                <Dialog.Title>Token GitHub</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{paragraph}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog} >Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default DialogAlert;