import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';
import firebaseApp from './src/firebase';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import ResetPasswordScreen from './src/ResetPasswordScreen';


const App = StackNavigator({
  Home: { screen: ResetPasswordScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen }
});

AppRegistry.registerComponent('Stacks', () => App);
