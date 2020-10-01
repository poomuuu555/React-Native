import React from 'react';
import { View,Text,StyleSheet, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function Logo() {
   
    setTimeout(() => {
        Actions.replace('Home');
    }, 2000);
    return (        
       <View style = {styles.container}>
           <Image style = {styles.picture} source={require('../weatherLogo.png')}/>
           <Text style = {styles.logoText}>Weather</Text>
       </View>
           
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25F3FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: 'black',
        fontSize: 30,
        marginTop: 29.1,
        fontWeight: 'bold',
    },
    picture: {
        width: 100,
        height: 100,
    }

})