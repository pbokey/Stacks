import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';
import firebaseApp from './src/firebase';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import UserInfo from './src/UserInfo';
import InfoEdit from './src/InfoEdit';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  UserInfo: {screen:UserInfo},
  InfoEdit: {screen: InfoEdit}
});

AppRegistry.registerComponent('Stacks', () => App);
