import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    page:{
        padding:10,
     },
    root:{
       flexDirection:"row",
       borderWidth:1,
       borderColor:"#d1d1d1",
       borderRadius:10,
       backgroundColor:"#fff",
       marginVertical:5
    },
    image:{
       flex:2,
       height:150,
      resizeMode:'contain'
    },
    rightContainer:{
        padding:10,
         flex:3
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
      },
      price:{
  
      },
      ratingsContainer:{
         flexDirection:"row",
         alignItems:"center",
         marginVertical:5
      },
      star:{
          margin:2
      },
      oldPrice:{
         fontSize:12,
         fontWeight:'normal',
         marginLeft:5,
         textDecorationLine:'line-through',
      }
})


export default styles;