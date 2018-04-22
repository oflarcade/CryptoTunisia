import React from 'react';
import {PropTypes} from 'prop-types';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

 const InputWithButton = ( props ) =>{
    const {onPress, buttonText , editable = true} = props;
    const containerStyles = [styles.container];
    if(editable === false){
            containerStyles.push(styles.containerDisabled)
    }
    return(
        <View style={containerStyles}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText} </Text>
            </TouchableOpacity>

            <View style={styles.border} />
                <TextInput style={styles.input}  underlineColorAndroid={'transparent'} {...props}/>
              
           

        </View>
    )
 }

 InputWithButton.propTypes ={
     onPress: PropTypes.func,
     buttonText: PropTypes.string,
 }

 export default InputWithButton;