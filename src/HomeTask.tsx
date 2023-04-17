import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const HomeTask = () => {
  return (
    <View>
      <Image
      style={styles.photo}
        source={require('./photo.png')}
      />
      <Text style= {styles.text}>
         Hey Leslee,
        there's a new course about
        Figma
      </Text>
      <Text style ={styles.newText}>
        find out how our new matching tool can help you leaarn aother way
    </Text>
    <TouchableOpacity style = {styles.button}>
      <Text style = {styles.newtext}>
        Discover the course
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton}>
      <Text>
        Not now
      </Text>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create ({
  photo:{
    width : 250 ,
    height : 350,
    left :69,
    top:10
  },
   text :{
    fontWeight:"bold",
    color: "black",
    fontSize: 35,
    textAlign:'center'
  

  },
  newText:{
    fontSize:20,
    textAlign:'center',
    top:16

  },
  button:{
    backgroundColor: 'black',
        borderRadius:20,
        alignItems: 'center',
        marginHorizontal:20,
        top: 30
  },
  newtext:{
    color:'white',
    padding: 15,
  },
  newbutton:{
    top:50,
    left: 190
  }
})

export default HomeTask;