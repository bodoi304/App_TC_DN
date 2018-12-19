import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginContainer from '~/containers/Login'
import AuthLoadingScreenContainer from '../containers/Login/AuthLoadingScreen'


export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreenContainer,
  Login: LoginContainer,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'AuthLoading',
});
