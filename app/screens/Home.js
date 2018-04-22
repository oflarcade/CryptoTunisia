import React, { Component } from 'react';
import {  View, Text, StatusBar } from 'react-native';
import { Container} from '../components/Container';
import { Logo } from '../components/Logo';
import {InputWithButton} from '../components/TextInput';

const TEMP_BASE_CURRENCY= 'USD';
const TEMP_QUOTE_CURRENCY= 'TND';
const TEMP_CRYPTO_CURRENCY = 'BTC';
const TEMP_BASE_PRICE= '100';
const TEMP_QUOTE_PRICE= '250';
const TEMP_CRYPTO_PRICE= '0.0004';

class Home extends Component {

        _HandlePressBaseCurrency = () =>{
            console.log('press base')
        }

        _HandlePressQuoteCurrency = () =>{
            console.log('press quote')
        }

        _HandlePressCryptoCurrency = () =>{
            console.log('press Crypto')
        }
        _handleTextChange=(text)=>{
            
        }
    render(){
        return(
            

                <Container>
                    <StatusBar hidden />
            
                    <Logo />
                    <InputWithButton  
                       buttonText={TEMP_BASE_CURRENCY}
                        onPress={this._HandlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE }
                        keyboardType='numeric'
                        onChangeText={this._handleTextChange}
                    />


                    <InputWithButton 
                       buttonText={TEMP_QUOTE_CURRENCY}
                       onPress={this._HandlePressQuoteCurrency}
                       editable={false}
                       defaultValue={TEMP_QUOTE_PRICE}
                    />

                    <InputWithButton 
                        buttonText={TEMP_CRYPTO_CURRENCY}
                        onPress={this._HandlePressCryptoCurrency}
                        editable={false}
                        defaultValue={TEMP_CRYPTO_PRICE}
                    />

                </Container>
            
            
        )

    }
}


export default Home;