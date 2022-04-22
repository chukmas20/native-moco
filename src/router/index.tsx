import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNav from './BottomTabNav';

const Root = createNativeStackNavigator();

const Router = () => {

  return (
    <NavigationContainer >
         <Root.Navigator screenOptions={{headerShown:false}}>
             <Root.Screen  component={BottomTabNav} name='Home Tabs'  />
         </Root.Navigator>
    </NavigationContainer>
    
  )
}

export default Router