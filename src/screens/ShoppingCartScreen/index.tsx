import { FlatList, View, Text} from 'react-native'
import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from '../../components/productItem/styles';
import ProductItem from '../../components/productItem';
import products from '../../data/cart';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


const ShoppingCartScreen = () => {
  const navigation = useNavigation()
  const totalPrice = products.reduce((summedPrice, product)=>(
    summedPrice + product.item.price * product.quantity), 0)

    const onCheckout =()=>{
        navigation.navigate("Address")
    }
  return (
    <View style={styles.page}>       
    
   <FlatList   
      data={products}
      renderItem={({item})=> <CartProductItem cartItem={item} />}
      keyExtractor = {(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={()=>(
        <View>
        <Text style={{fontSize:18, fontWeight:'bold'}}> Subtotal ({products.length} items):{''}
           <Text style={{color:'#e47911'}}> ${totalPrice.toFixed(2)} </Text>
         </Text>
         <Button   text="Proceed to checkout" 
           onPress={onCheckout} 
           containerStyles={{backgroundColor:"#f7e300", borderColor:"#f7e300"}}
          />
       </View>
      )}
   />
</View>
  )
}

export default ShoppingCartScreen