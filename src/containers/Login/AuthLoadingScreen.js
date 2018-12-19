import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {sagaUpdateCurrentUser} from './actions'
import {store} from '../../../store'
import { connect } from "react-redux";
import { compose } from 'redux';
 class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
  
    _bootstrapAsync = async () => {
      const madn = await AsyncStorage.getItem('madn');
      store.dispatch(sagaUpdateCurrentUser({
        madn
      }))
      this.props.navigation.navigate(madn ? 'Main' : 'Login');
    };
  

    render() {
      return (
        <View >
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }

  const withConnect = connect();

  export default AuthLoadingScreenContainer =  compose(
    withConnect
  )(AuthLoadingScreen);