import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopScreen from './components/ShopScreen'
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={ShopScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}