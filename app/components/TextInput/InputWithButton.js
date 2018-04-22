import React from 'react';
import {PropTypes} from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import styles from './styles';
import color from 'color';

 const InputWithButton = ( props ) =>{
    const {onPress, buttonText , editable = true} = props;
    const containerStyles = [styles.container];
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

    if(editable === false){
            containerStyles.push(styles.containerDisabled)
    }
    return(
        <View style={containerStyles}>
            <TouchableHighlight underlaycolor={underlayColor} style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText} </Text>
            </TouchableHighlight>

            <View style={styles.border} />
                <TextInput style={styles.input}  underlineColorAndroid={'transparent'} {...props}/>
              
           

        </View>
    )
 }

 InputWithButton.propTypes ={
     onPress: PropTypes.func,
     buttonText: PropTypes.string,
     editable: PropTypes.bool,
 }

 export default InputWithButton;