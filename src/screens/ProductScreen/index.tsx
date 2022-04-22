import { View, Text, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { useRoute } from '@react-navigation/native';



const ProductSCreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null )
  const [quantity, setQuantity] = useState(1)

  const route = useRoute()
  console.log(route.params)

  // console.log(selectedOption)
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title} >{product.title}</Text>

      <ImageCarousel images={product.images} />

        <Picker
           selectedValue={selectedOption}
           onValueChange={(itemValue) =>
           setSelectedOption(itemValue)}
        >
             {product.options.map(option => (
                 <Picker.Item  label={option} value={option} />
             ))}
        </Picker>
     <Text style={styles.price}>
          from ${product.price}
          { product.oldPrice && (<Text style={styles.oldPrice}>{product.oldPrice}</Text>)}
     </Text>
     <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector  quantity={quantity}  setQuantity={setQuantity} />
      <Button 
        text={"Add to Cart"}
         containerStyles={{backgroundColor:"#e3c905"}}
          onPress={()=>{console.warn("Add to cart")}}
        />
      
      <Button
        text={"Buy Now"}
        onPress={()=> {console.warn("Add to cart")}}
        />


    </ScrollView>
  )
}



export default ProductSCreen