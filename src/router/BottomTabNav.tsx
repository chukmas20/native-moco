import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';




const BottomTabNav = () => {
    const Tab = createBottomTabNavigator()
  return (
      <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
         headerShown:false,
        //  tabBarStyle:{backgroundColor:'black'},
         tabBarInactiveTintColor: '#ffbd7d',
         tabBarActiveTintColor: '#457911'

        }}>
           <Tab.Screen  component={HomeStack}  name='Home' options={{tabBarIcon:({color, size})=> (
               <Entypo name="home"  color={color}  size={19} />
            )}}  />
           <Tab.Screen  component={HomeScreen}  name='profile' options={{tabBarIcon:({color, size})=> (
               <Ionicons name="person"  color={color}  size={19} />
            )}}  />
           <Tab.Screen  component={ShoppingCartStack}  name='ShoppingCart' options={{tabBarIcon:({color, size})=> (
               <Entypo name="shopping-cart"  color={color}  size={19} />
            )}}/>
           <Tab.Screen  component={HomeScreen}  name='more' options={{tabBarIcon:({color, size})=> (
               <Entypo name="menu"  color={color}  size={19} />
            )}} />
      </Tab.Navigator>
    
  )
}

export default BottomTabNav