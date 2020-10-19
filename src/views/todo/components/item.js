import React from 'react';
import { List } from 'react-native-paper';

export function Item({ title }) {
    return (
        <List.Item title={title}
         left={props => <List.Icon {...props} icon="equal" /> }/>
    )
}