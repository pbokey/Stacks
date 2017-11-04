import { AppRegistry } from 'react-native';
import App from './App';
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCCzhkQsZBQfep8NSb9xfjyHRyaEkYJ0nI",
    authDomain: "stacks-94005.firebaseapp.com",
    databaseURL: "https://stacks-94005.firebaseio.com",
    projectId: "stacks-94005",
    storageBucket: "",
    messagingSenderId: "400552345256"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent('Stacks', () => App);
