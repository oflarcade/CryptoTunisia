import React from 'react';
import PropTypes from 'prop-types';
import {View , TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';

const Header = ({onPress})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image resizeMode='contain' style={styles.icon} source={require('./images/settings.png')}/>
            </TouchableOpacity>
        </View>
    )
}

Header.propTypes={
    onPress: PropTypes.func, 
}

export default Header;