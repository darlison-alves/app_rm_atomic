import React from 'react';
import { View, Text } from "react-native";
import { Button, useTheme } from 'react-native-paper';
import { WelcomeText } from './components/hearde.text';

import styles from './style';

export default function Welcome({ navigation }) {
    const { colors } = useTheme();

    return(
        <View style={styles.container}>
            
            <WelcomeText />
            
            <Button 
                style={styles.btn} 
                color={colors.background} 
                mode="outlined" onPress={() => navigation.navigate('Home') } >
                    ENTRAR
            </Button>
            
            <Text style={styles.subheading} onPress={()=> navigation.navigate('Github')} >
                ir para meu Github!
            </Text>
        </View>
    );
}