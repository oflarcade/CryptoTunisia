import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {  View, Text, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container} from '../components/Container';
import { Logo } from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Button';
import {LastConverted} from '../components/Text';
import BottomBannerAd from '../components/BottomBannerAd';
import styles from './styles';
import {swapCurrency, changeCurrencyAmount, getInitialConversion} from '../actions/currencies';

class Home extends Component {

        static propTypes={
            navigation:PropTypes.object,
            dispatch: PropTypes.func, 
            baseCurrency: PropTypes.string,
            quoteCurrency: PropTypes.string,
            conversionRate: PropTypes.number,
            conversionRateQ: PropTypes.number,
            isFetching: PropTypes.bool,
            lastConversionDate:PropTypes.object,
        }

        componentWillMount(){
            this.props.dispatch(getInitialConversion());
        }

        _handlePressBaseCurrency = () =>{
            //this.props.navigation.navigate('CurrencyList', {title: 'Base Currency', type:'base'})
        }

        _handlePressQuoteCurrency = () =>{
            this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency', type:'quote'})
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
        let quotePrice= (this.props.amount * this.props.conversionRate).toFixed(6);
        

        if(this.props.isFetching){
            quotePrice= '...';
        }
       

        return(
            
            <View style={styles.container}>
               
                    <StatusBar hidden />
                    <KeyboardAvoidingView behavior='padding'> 
                    {/* <ClearButton 
                        text='Reverse Currencies'
                        onPress={this._handleSwapCurrency}
                    /> */}
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

                    <LastConverted 
                    base={this.props.baseCurrency}
                    quote={this.props.quoteCurrency}
                    conversionRate={this.props.conversionRate}
                    date={this.props.lastConversionDate} />
                   
                    </KeyboardAvoidingView>
                   
                         
                <BottomBannerAd />
                         
                     
            </View>

              
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


//banner AD fb ID:965450500299610_967596036751723
//interstitial AD fb ID: 965450500299610_965451473632846