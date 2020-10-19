import React from 'react';
import { FAB } from "react-native-paper";
import { styles } from './styles';

export function ButtonFab({onPress}) {
    return(
        <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={onPress}
        />
    )
}