/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebaseApp from './firebase';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import UserInfo from './UserInfo';
import InfoEdit from './InfoEdit';
import ResetPasswordScreen from './ResetPasswordScreen';
import MainScreen from './MainPage';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  UserInfo: {screen: UserInfo},
  InfoEdit: {screen: InfoEdit}
  Main: { screen: MainScreen }
});
