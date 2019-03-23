import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {createStackNavigator ,createAppContainer} from 'react-navigation';

import Login from './screens/Login'
import ClassHour from './screens/ClassHour'
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {screen: Login},
  ClassHour: {screen: ClassHour}
});

const AppContainer = createAppContainer(AppNavigator);