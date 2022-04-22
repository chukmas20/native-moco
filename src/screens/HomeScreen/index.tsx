import { FlatList, View} from 'react-native'
import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from '../../components/productItem/styles';
import ProductItem from '../../components/productItem';
import products from '../../data/products';

const HomeScreen = ({searchValue}:{searchValue: string}) => {
  console.log(searchValue);
  return (
    <View style={styles.page}>       
        {/* Render product component */}
       {/* <ProductItem item={products[0]} /> */}
       <FlatList   
          data={products}
          renderItem={({item})=> <ProductItem item={item} />}
          keyExtractor = {(item) => item.id}
          showsVerticalScrollIndicator={false}
       />
 </View>
  )
}



export default HomeScreen