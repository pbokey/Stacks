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
<<<<<<< HEAD
import ResetPasswordScreen from './ResetPasswordScreen';
=======
import MainScreen from './MainPage';
>>>>>>> 210d56a5455b3077ce42cdd49e51b70e3dd5e80a


const App = StackNavigator({
  Home: { screen: ResetPasswordScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen }
});
