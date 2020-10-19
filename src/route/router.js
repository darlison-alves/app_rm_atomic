import 'react-native-gesture-handler';

import React from 'react';
import { Platform, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../views/welcome/welcome';
import Home from '../views/home/home';
import GitHubWebView from '../views/welcome/components/github.webview';
import { colors } from '../views/defaults/colors';
import { TodoList } from '../views/todo/todo.list';

const Stack = createStackNavigator();

const prefix = (Platform.OS === 'ios')
  ? 'atomictest://'
  : 'atomictest://atomictest';

  const linking = {
    prefixes: [prefix],
  };

export function Routers() {

    return (
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>} >
            <Stack.Navigator >
            <Stack.Screen name="TodoList" component={TodoList} options={{
              headerStyle: { backgroundColor: colors.main, },
              headerTintColor: colors.white,
              title: "Lista ToDo",
            }} />
            <Stack.Screen name="Main" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Github" component={GitHubWebView} 
                options={
                { 
                    headerShown: true, 
                    headerTitle: null, 
                    headerStyle: { backgroundColor: colors.main },
                    headerTintColor: colors.white 
                }
                }/>
            
            </Stack.Navigator>
        </NavigationContainer>);
}