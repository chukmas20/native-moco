import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

  return (
         <Stack.Navigator>
             <Stack.Screen  component={ShoppingCartScreen} name='cart' options={{title:'Shopping Cart'}} />
             <Stack.Screen  component={AddressScreen} name='Address' options={{title:'Address'}}  />        
         </Stack.Navigator>
    
  )
}

export default HomeStack