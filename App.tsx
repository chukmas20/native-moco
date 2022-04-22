import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {View, StatusBar,StyleSheet,Text,useColorScheme} from 'react-native';
import {  Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import { SafeAreaView } from 'react-native-safe-area-context';
// import HomeScreen from './src/screens/HomeScreen';
// import ProductSCreen from './src/screens/ProductScreen';
// import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
// import AddressScreen from './src/screens/AddressScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <Router />
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
 
});

export default App;
