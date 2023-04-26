import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SecondPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.hooter}>

                <TouchableOpacity >
                    <Image style={styles.back}
                        source={require('./back.png')} />
                </TouchableOpacity>
                <Text style={styles.text1}>
                    Credit / Debit Cart
                </Text>
            </View>

            <Image style={styles.photo}
                source={require('./photo2.png')}
            />
            <View style={styles.kamera}>
                <TouchableOpacity >

                    <Image style={styles.vector2}
                        source={require('./vector2.png')} />
                </TouchableOpacity>
            </View >
            <View style={styles.footer}>
                <Text >
                    name on card
                </Text>
                <Text style={styles.text3}>
                    Leslee  Harron
                </Text>
                <Text >
                    Card number
                </Text> 
                
                <Text style={styles.text5}>
                    4169738829701808
                </Text>
                 <View style={{flexDirection:'row',gap : 70} }>
                    <Text style={styles.text6} >
                    04/22 
                    </Text>
                    <Text style={styles.text6}>
                        474
                    </Text>
                </View>
                <TouchableOpacity style={styles.newbutton}>
                    <Text style={styles.text7}>
                        USE THIS CARD
                    </Text>
                   
                </TouchableOpacity>


            </View>

        </View>


    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
       
       

    },
    hooter: {
        flexDirection: 'row',
        gap: 15,
    },
    kamera: {
        alignItems: 'center'
    },
    footer: {
        gap:4

    },
    photo: {
        height: 350,
        width: 400,
        borderRadius: 8,
    },
    back: {
        width: 20,
        height: 26,
        marginTop: 5
    },
    text1: {
        fontSize: 25,
        fontWeight: "bold",
    },
    vector2: {



    },

    text3: {
        fontSize: 30,
        color: '#0B152D',
        height: 40,
        width: 300,
        borderRadius: 8,
        borderWidth :1


    },
    text7: {
        color :'white',
        fontSize: 20

    },
    text5: {

        fontSize: 30,
        color: '#0B152D',
    height: 40,
    width: 300,
    borderRadius: 8,
    borderWidth : 1

        
},
    newbutton: {
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent :'center',
        marginTop: 20,

        height: 35

    },
    text6: {
        fontSize: 30,
       color :'#0B152D',
    height: 40,
    width: 100,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 40

        


    }
,
text8: {
   
    backgroundColor: '#8698A8',
    height: 40,
    width: 100,
    borderRadius: 8
}



})
export default SecondPage;