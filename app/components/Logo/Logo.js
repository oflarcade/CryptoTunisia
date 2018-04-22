import React from 'react';
import {  View, Text,Image,ImageBackground } from 'react-native';
import styles from './styles';

const Logo = () =>{
    return(
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={require('./Images/background_512.png')} style={styles.containerImage}>
                <Image source={require('./Images/logo_512.png')} style={styles.image} />
            </ImageBackground>
            <Text style={styles.text}>Crypto Tunisia</Text>
        </View>
    )
}

export default Logo; 
