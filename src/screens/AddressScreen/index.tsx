import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, {useState} from 'react'
import styles from '../AddressScreen/styles';
import countryList from "country-list";
import Button from '../../components/Button';

const AddressScreen = () => {
    const countries = countryList.getData();
    const [country, setCountry] = useState(countries[0].code)
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [addressError, setAddressError] = useState('')

    const [city, setCity] = useState(" ")

    // console.log(country)
    const onCheckOut =()=>{
       if(addressError){
         Alert.alert("Fix all field errors")
         return;
       }
       if(!fullName){
          Alert.alert("Full name is required")
          return;
       }
       if(!phone){
        Alert.alert("Phone number is required")
        return;
     }
     if(!address){
      Alert.alert("Address field is required")
      return;
      }
    }

    const validateAddress =()=>{
       if(address.length < 3){
          setAddressError("Address is too short")
       }
       if(address.length > 10){
        setAddressError("Address is too Long")
     }
    }

  return (
     <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
       keyboardVerticalOffset ={Platform.OS === "ios" ? 10 : 0}
     >
         <ScrollView style={styles.root}>
         <View style={styles.row}>
             <Picker
               selectedValue={country}
               onValueChange={setCountry}
             >
                 {countries.map( country  => <Picker.Item value= {country.code} label={country.name} />
                 )}
             </Picker>
         </View>
         <View style={styles.row}>
              <Text style={styles.label}> Full Name(first name and last name)</Text>
               <TextInput 
                  style={styles.input} 
                  placeholder="full name" 
                  value={fullName}
                  onChangeText={setFullName}
              />
         </View>
         <View style={styles.row}>
              <Text style={styles.label}> Phone Number</Text>
               <TextInput 
                  style={styles.input} 
                  placeholder="Phone Number" 
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType={'phone-pad'}
              />
         </View>
         <View style={styles.row}>
              <Text style={styles.label}> Address</Text>
               <TextInput 
                  style={styles.input} 
                  placeholder="Address" 
                  value={address}
                  onEndEditing={validateAddress}
                  onChangeText={(text)=>
                    {setAddress(text)
                    setAddressError("")
                    }
                  }
              />
              {!!addressError && (<Text style={styles.errorLabel}>{addressError}</Text>)}
         </View>
         <View style={styles.row}>
              <Text style={styles.label}> City</Text>
               <TextInput 
                  style={styles.input} 
                  placeholder="City" 
                  value={city}
                  onChangeText={setCity}
              />
         </View>
         <Button  text='CheckOut' onPress={onCheckOut} />
    </ScrollView>
     </KeyboardAvoidingView>
    
  )
}

export default AddressScreen