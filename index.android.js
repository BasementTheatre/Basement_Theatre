import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Navigator,
} from 'react-native';
/*-------------------import component----------*/
import Main from './Component/Main/BTMain';
import BTWebView from './BTWebView';
class Basement_Theatre extends Component {
    render() {
       return(
         <Navigator
                initialRoute={{name: 'main', index: 0, id:'main'}}
                renderScene={(route, navigator) => Basement_Theatre._renderPage(route,navigator)}
          />
        )
    }
    static _renderPage(route, nav) {
        switch (route.id) {
            case 'main':
                return (<Main nav={nav}/>);
                break;
            case 'webview':
                return (<BTWebView url={route.url}/>);
                break;
        }
    }
}
AppRegistry.registerComponent('Basement_Theatre', () => Basement_Theatre);
