import React,{Component} from 'react';
import {  View, Text,Image,ImageBackground, Keyboard , Animated} from 'react-native';
import styles from './styles';

class Logo extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.keyboardShowListener = Keyboard.addListener('keyboardWillShow',this.keyboardShow.bind(this));
        this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide.bind(this));
    }
    componentWillUnmount(){
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () =>{

    }

    keyboardHide = () =>{

    }
    
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground resizeMode='contain' source={require('./Images/background_512.png')} style={styles.containerImage}>
                    <Image source={require('./Images/logo_512.png')} style={styles.image} />
                </ImageBackground>
                <Text style={styles.text}>Crypto Tunisia</Text>
            </View>
        )
    }
}    


export default Logo; 
