import React from 'react';
import { Platform,Image,Button,StyleSheet ,View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Dịch vụ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Cài đặt',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};



export default TabBottom =  createBottomTabNavigator({
  HomeStack,
  SettingsStack
});

// export default createAppContainer({
//   TabBottom,
//   MyDrawerNavigator
// });
// export default class MainTabNavigator extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//             <TabBottom></TabBottom>  
//      </View>)
//   }
// }
