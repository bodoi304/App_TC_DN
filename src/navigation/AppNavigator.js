import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginContainer from '~/containers/Login'


export default createSwitchNavigator({
  Login: LoginContainer,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'Login',
});
