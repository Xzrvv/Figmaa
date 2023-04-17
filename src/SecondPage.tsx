import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text,  TouchableOpacity } from 'react-native'

const SecondPage = () => {
    return (
   <SafeAreaView>
    
              <TouchableOpacity >
                  <Image style ={ styles.geri}
         source = {require('./Vector.png')} />
         </TouchableOpacity>
         <Text style = {styles.text1}>
             Credit / Debit Cart
             </Text>
        <Image style = { styles.photo} 
        source = {require('./photo2.png')}
        /> 
        
        <TouchableOpacity >
                  <Image style ={ styles.vector2}
         source = {require('./vector2.png')} />
         </TouchableOpacity>
         <Text style = {styles.text2}>
            name on card
         </Text>
         <Image style = { styles.Container} 
        source = {require('./Container.png')}
        />
        <Text style = {styles.text3}>
             Leslee  Harron
            </Text> 
            <Text style= {styles.text4}>
                Card number
            </Text>
            <Image style = { styles.Container2} 
        source = {require('./Container.png')}
        />
        <Text style = {styles.text5}>
            4169738829701808
        </Text>
        <TouchableOpacity style = {styles.newbutton}>
      <Text style = {styles.text6}>
       USE THIS CARD
        </Text>
    </TouchableOpacity>
        
       
        

       
        </SafeAreaView>
        

    )
};

const styles = StyleSheet.create({
    photo:{
        top : 10,
        height : 350,
        width :400,
        left : 10,
        right : 10 ,
        borderRadius: 8,
    },
    geri:{
        top : 25,
        left :15
    },
    text1:{
        fontSize: 25,
        left: 45,
        fontWeight: "bold"
    },
    vector2:{
        left :200,
        
    },
    text2 :{
        top :10
    },
    Container:{
        top :10,
       
    },
    text3: {
        fontWeight: 'bold',
        fontSize: 25,
        left :40,
        bottom: 30
    },
    text4: {
        bottom :20
    },
    Container2 :{
        bottom:20
    },
    text5:{
        bottom: 67,
        left :30,
        fontSize: 30,
        fontWeight: "500"
        
},
 newbutton:{
    backgroundColor: 'black',
    borderRadius:10,
    alignItems: 'center',
    marginHorizontal:50,
    bottom :5,
    height:50
    
 },
 text6:{
    color : "white",
    top:10
     
 }

    
    

})
export default SecondPage;