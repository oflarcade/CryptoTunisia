import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { FlatList, StatusBar, View } from 'react-native';
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import BottomBannerAd from '../components/BottomBannerAd';
import {changeBaseCurrency, changeQuoteCurrency} from '../actions/currencies';
const TEMP_CURRENT_CURRENCY = 'USD';

class CurrencyList extends Component {
  
   static propTypes = {
     navigation: PropTypes.object,
     dispatch: PropTypes.func,
     baseCurrency: PropTypes.string,
     quoteCurrency: PropTypes.string,
     
   }
  handlePress = (currency) => {
    const {type} = this.props.navigation.state.params
    if(type === 'base'){
      this.props.dispatch(changeBaseCurrency(currency))
    }else if (type === 'quote'){
     this.props.dispatch(changeQuoteCurrency(currency))
    }

    this.props.navigation.goBack(null)
  };
    
  render() {
      let comparisonCurrency= this.props.baseCurrency;
      if(this.props.navigation.state.params.type === 'quote'){
        comparisonCurrency= this.props.quoteCurrency;
      }else if(this.props.navigation.state.params.type === 'base'){
        comparisonCurrency= this.props.baseCurrency; 
      }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden/>
        <FlatList
          
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
          <BottomBannerAd />
      </View>
    );
  }
}

const mapStateToProps = (state) =>{
  const baseCurrency =  state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
 
  return{
      baseCurrency,
      quoteCurrency,
     
    };
};

export default connect(mapStateToProps)(CurrencyList);