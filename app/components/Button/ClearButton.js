import React from 'react';
import PropTypes from 'prop-types';
import { View,TouchableOpacity, ImageBackground,Text} from 'react-native';
import styles from './styles';

const ClearButton = ({text, onPress}) =>{
    return(
      <TouchableOpacity style={styles.container} onPress={onPress}>  
        <View style={styles.wrapper} >
            <ImageBackground resizeMode='contain' style={styles.icon}  source={require('./Images/switch.png')} />
            <Text style={styles.text} >{text}</Text>
        </View>
      </TouchableOpacity>
    )
}

ClearButton.propTypes={
    onPress: PropTypes.func,
    text: PropTypes.string,
}

export default ClearButton;
