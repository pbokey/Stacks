import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';
import firebaseApp from './src/firebase';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import ResetPasswordScreen from './src/ResetPasswordScreen';
import MainScreen from './src/MainPage';

const MainStack = StackNavigator({
    Main: { screen: MainScreen }
}, {
    headerMode: 'none'
});

const Root = StackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen }
});



AppRegistry.registerComponent('Stacks', () => Root);
