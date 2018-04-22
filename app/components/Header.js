import React, { Component } from 'react';
import {  View,Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Header =({ navigation })=> {


    return (
      <View style ={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../components/Header/images/back.png')} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.text}>Currency List</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
    header:{
        height : 50,
        backgroundColor:'#e84118',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        
    },
    cart:{
        width:40,
        height:40
    },
    text:{
        fontSize: 24,
        marginLeft: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        fontStyle: 'italic',
        color: '#FFF',
    },
    back:{
        alignSelf:'flex-start',
        width:50 /2,
        height: 50 /2,
    }
})


export default Header;