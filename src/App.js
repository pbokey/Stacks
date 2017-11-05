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
import ResetPasswordScreen from './ResetPasswordScreen';


const App = StackNavigator({
  Home: { screen: ResetPasswordScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen }
});
