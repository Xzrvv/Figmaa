import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";

const HomeTask = () => {
  return (
    <SafeAreaView style = {styles.container} >
      
      <Image
      style={styles.photo}
        source={require('./photo.png')}
      />
     
    <View style ={ styles.textcontainer}>
      <Text style= {styles.text}>
         Hey Leslee,{'\n'} there's a new course about {'\n'}Figma
      </Text>
      
      <Text style ={styles.newText}>
        Find out how our new matching tool can help you leaarn aother way
    </Text> 
    
    <TouchableOpacity style = {styles.button}>
      <Text style = {styles.newtext}>
        Discover the course
        </Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text>
        Not now
      </Text>
    </TouchableOpacity>
    </View>
    
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create ({
  container:{
    justifyContent :'center',
   alignItems : 'center',
  },
  textcontainer:{
    justifyContent : 'center',
    gap:24,
    alignItems: 'center'
    
    },
  buttoncontainer:{
  gap :20,
  
  },
  photo:{
    width : 250 ,
    height : 350,
    justifyContent:'center',
    alignItems: 'center'
   
  },
  text :{
   fontWeight:"bold",
   color: "black",
   fontSize: 25,
   textAlign:'center'
  

 },
  newText:{
    fontSize:20,
    textAlign:'center',
    top:16

  },
  button:{
    backgroundColor: '#07122A',
        alignItems: 'center',
        borderRadius : 15,
        height: 50,
        width : 300
       
  },
  newtext:{
    color:'white',
    padding: 15,
  },
  
})

export default HomeTask;