import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     root:{
          padding:10
     },
     row:{
        marginVertical:5
     },
     label:{
        fontSize:16,
        fontWeight:'bold'
     },
     input:{
        backgroundColor:'white',
        height:40,
        padding:5,
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:3,
        marginVertical:5,
     },
     errorLabel:{
        color: 'red'
     }
    
})

export default styles;