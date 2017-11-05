import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';
import firebaseApp from './src/firebase';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import ResetPasswordScreen from './src/ResetPasswordScreen';
import MainScreen from './src/MainPage';

<<<<<<< HEAD
const App = StackNavigator({
=======
const MainStack = StackNavigator({
    Main: { screen: MainScreen }
}, {
    headerMode: 'none'
});

const Root = StackNavigator({
>>>>>>> d12f2bcb60285ad944a73dd5bb4237b9d355e864
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen }
});



AppRegistry.registerComponent('Stacks', () => Root);
