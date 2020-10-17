import React from 'react';
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { B } from '../components/B';

import styles from './style';

const WelcomeText = () => (
<View style={styles.welcomeText}>
    <Text style={styles.heading} >
        Olá! Sou <B>DARLISON ALVES!</B>
    </Text>
    <Text style={styles.subheading}>Seja bem Vindo ao APP</Text>
</View>)

export default function Welcome() {
    return(
        <View style={styles.container}>
            
            <WelcomeText />
            
            <Button style={styles.btn} color="#6200EE" mode="contained" onPress={() => console.log('PRESS ME')} >START</Button>
            <Text style={styles.subheading}>Seja bem Vindo ao APP</Text>
        </View>
    )
}