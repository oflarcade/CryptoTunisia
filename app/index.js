import React, { Component } from 'react';
import RootNavigation from './navigation/rootNavigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import store from './config/store';

EStyleSheet.build({
    $primaryBlue: '#e84118',
    $logoColor : '#FFF',
    $white: '#FFF',
    $border: '#e2e2e2',
    $inputText: '#797979',
    $lightGrey: '#F0F0F0',
    $darkText: '#343434',


    
});

export default () =>(

    <Provider store={store}>
    <RootNavigation />
    </Provider>
);
