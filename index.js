import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';
import firebaseApp from './src/firebase';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import ResetPasswordScreen from './src/ResetPasswordScreen';
import MainScreen from './src/MainPage';

const App = StackNavigator({
  Home: { screen: ResetPasswordScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen }
});

AppRegistry.registerComponent('Stacks', () => App);
