import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'USD';

class CurrencyList extends Component {
   static navigationOptions ={headerVisible: true,};
  handlePress = () => {
    this.props.navigation.goBack(null)
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden/>
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;