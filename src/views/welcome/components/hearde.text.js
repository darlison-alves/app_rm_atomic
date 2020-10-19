import React from 'react';
import { View, Text } from 'react-native';
import { B } from '../../components/B';
import styles from '../style';

export const WelcomeText = () => (
    <View style={styles.welcomeText}>
        <Text style={styles.heading} >
            Olá! Sou <B>DARLISON ALVES!</B>
        </Text>
        <Text style={styles.subheading}>Seja bem Vindo ao APP</Text>
    </View>)