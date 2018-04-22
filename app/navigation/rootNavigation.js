import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
const RootStackNavigator=  StackNavigator(
    {
        Home:{
            screen: Home,
            navigationOptions:{
                header: ()=> null,
            },
        },
        CurrencyList: {
            screen: CurrencyList,
            navigationOptions:({navigation}) =>({
                headerTitle: navigation.state.params.title,
            }),
        },
    },{
        mode:'modal',
        
    },
)

export default class RootNavigation extends Component{

    render(){
        return(
            <RootStackNavigator />
        )
    }

}