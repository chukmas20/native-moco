import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNav from './BottomTabNav';
import ProductSCreen from '../screens/ProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Feather from "react-native-vector-icons/Feather";

const Stack = createNativeStackNavigator();

interface  HeaderComponentProps{
   searchValue: string,
   setSearchValue:()=> void;
}

const HeaderComponent=({searchValue, setSearchValue}:HeaderComponentProps)=>{
  return (
     <SafeAreaView  style={{ backgroundColor:'#22e3dd'}}>
           <View style={{  margin:10, padding:5,
              flexDirection:"row",
              backgroundColor:'white',
              alignItems:'center'}}
              >
            <Feather   name="search"  size={20} />
            <TextInput 
              style={{ height:40, marginLeft:10}}
              placeholder='..search'
               value={searchValue}
               onChangeText={setSearchValue}
              />
         </View>
     </SafeAreaView>
  )
}

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
           <Stack.Navigator screenOptions={{
             header:()=> <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />
            }}>
             <Stack.Screen   name='HomeScreen' options={{title:'Home'}} >
                {()=> <HomeScreen  searchValue={searchValue}/>}
             </Stack.Screen>
             <Stack.Screen  component={ProductSCreen} name='ProductDetails'  />        
         </Stack.Navigator>
  )
}

export default HomeStack