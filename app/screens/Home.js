import React, { Component } from 'react';
import {  View, Text, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container} from '../components/Container';
import { Logo } from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Button';
import {LastConverted} from '../components/Text';
import {swapCurrency, changeCurrencyAmount} from '../actions/currencies';


const TEMP_BASE_CURRENCY= 'USD';
const TEMP_QUOTE_CURRENCY= 'TND';
const TEMP_CRYPTO_CURRENCY = 'BTC';
const TEMP_BASE_PRICE= '100';
const TEMP_QUOTE_PRICE= '250';
const TEMP_CRYPTO_PRICE= '0.0004';
const TEMP_CONVERSION_DATE= new Date();
const TEMP_CONVERSION_RATE= '2.5';

class Home extends Component {

        _handlePressBaseCurrency = () =>{
            this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'})
        }

        _handlePressQuoteCurrency = () =>{
            this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'})
        }

        _handlePressCryptoCurrency = () =>{
            this.props.navigation.navigate('CurrencyList', {title: 'Crypto Currency'})
        }
        _handleTextChange=(amount)=>{
            // TODO: make this work with this.props.dispatch
            console.log(changeCurrencyAmount(amount))
        }

        _handleSwapCurrency =()=>{
            // TODO: make this work with this.props.dispatch
        }

        _handleOptionPress=()=>{

        }

    render(){
        return(
            

                <Container>
                    <StatusBar hidden />
                    <KeyboardAvoidingView behavior='padding'> 
                    <Logo />
                    <InputWithButton  
                       buttonText={TEMP_BASE_CURRENCY}
                        onPress={this._handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE }
                        keyboardType='numeric'
                        onChangeText={this._handleTextChange}
                    />


                    <InputWithButton 
                       buttonText={TEMP_QUOTE_CURRENCY}
                       onPress={this._handlePressQuoteCurrency}
                       editable={false}
                       defaultValue={TEMP_QUOTE_PRICE}
                    />

                    <InputWithButton 
                        buttonText={TEMP_CRYPTO_CURRENCY}
                        onPress={this._handlePressCryptoCurrency}
                        editable={false}
                        defaultValue={TEMP_CRYPTO_PRICE}
                    />
                    <LastConverted 
                    base={TEMP_BASE_CURRENCY}
                    quote={TEMP_QUOTE_CURRENCY}
                    conversionRate={TEMP_CONVERSION_RATE}
                    date={TEMP_CONVERSION_DATE} />
                    <ClearButton 
                        text='Reverse Currencies'
                        onPress={this._handleSwapCurrency}
                    />
                    </KeyboardAvoidingView>
                </Container>
            
            
        )

    }
}


export default Home;