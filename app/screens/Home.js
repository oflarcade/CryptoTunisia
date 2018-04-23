import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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

        static propTypes={
            navigation:PropTypes.object,
            dispatch: PropTypes.func, 
            baseCurrency: PropTypes.string,
            quoteCurrency: PropTypes.string,
            conversionRate: PropTypes.number,
            isFetching: PropTypes.bool,
            lastConversionDate:PropTypes.object,
        }

        _handlePressBaseCurrency = () =>{
            this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'})
        }

        _handlePressQuoteCurrency = () =>{
            this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'})
        }

        _handlePressCryptoCurrency = () =>{
            this.props.navigation.navigate('CurrencyList', {title: 'Crypto Currency'})
        }
        _handleTextChange=(text)=>{
            this.props.dispatch(changeCurrencyAmount(text));
           
        }

        _handleSwapCurrency =()=>{
            this.props.dispatch(swapCurrency());
        }

        _handleOptionPress=()=>{

        }

    render(){
        let quotePrice= (this.props.amount * this.props.conversionRate).toFixed(2);
        if(this.props.isFetching){
            quotePrice= '...'
        }
       

        return(
            

                <Container>
                    <StatusBar hidden />
                    <KeyboardAvoidingView behavior='padding'> 
                    <Logo />
                    <InputWithButton  
                       buttonText={this.props.baseCurrency}
                        onPress={this._handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString() }
                        keyboardType='numeric'
                        onChangeText={this._handleTextChange}
                    />


                    <InputWithButton 
                       buttonText={this.props.quoteCurrency}
                       onPress={this._handlePressQuoteCurrency}
                       editable={false}
                       defaultValue={quotePrice}
                    />

                    <InputWithButton 
                        buttonText={TEMP_CRYPTO_CURRENCY}
                        onPress={this._handlePressCryptoCurrency}
                        editable={false}
                        defaultValue={TEMP_CRYPTO_PRICE}
                    />
                    <LastConverted 
                    base={this.props.baseCurrency}
                    quote={this.props.quoteCurrency}
                    conversionRate={this.props.conversionRate}
                    date={this.props.lastConversionDate} />
                    <ClearButton 
                        text='Reverse Currencies'
                        onPress={this._handleSwapCurrency}
                    />
                    </KeyboardAvoidingView>
                </Container>
            
            
        )

    }
}

const mapStateToProps =(state) =>{
        const baseCurrency= state.currencies.baseCurrency;
        const quoteCurrency= state.currencies.quoteCurrency;
        const conversionSelector= state.currencies.conversions[baseCurrency] || {};
        const rates= conversionSelector.rates || {};

    return{
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConversionDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    };
};


export default connect(mapStateToProps)(Home);