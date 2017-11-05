import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title } from 'native-base';
import firebaseApp from './firebase';
import styles from './Themes/MyTheme';
import MainScreen from './MainPage';


export default class LoginScreen extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      email: 'pbokey@gatech.edu',
      password: 'test123',
    }
  }

  static navigationOptions = {
    title: 'Login',
  };

  login() {
    if (this.state.email.length < 6 || this.state.password.length < 6) {
      return;
    }
    var { navigate } = this.props.navigation;
    var navpointer = this.props.navigation;
    email = this.state.email.toLowerCase();
    password = this.state.password;
    var userResult;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        var userID = user.toJSON().uid;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Main', params : { uid: user.toJSON().uid.toString()}})]
        });
        navpointer.dispatch(resetAction);
        var key = 'users/'+user.uid;
        firebaseApp.database().ref(key).once('value').then(function(userData) {
          if (userData.val() == undefined) {
            Alert.alert("no user exists, delete your account and try again");
          } else {
            userResult = {
              "name": userData.child("name"),
              "payment": userData.child("payment"),
              "groupID": userData.child("groupID"),
            }
            //Alert.alert(JSON.stringify(userResult));
          }
        }).catch(function(error) {
          Alert.alert('error: ' + error.message);
        });
        // navigate('Main')
      }).catch(function(error) {
          if (error.code === 'auth/wrong-password') {
            Alert.alert("Wrong Password");
          } else {
            Alert.alert(error);
          }
          console.log(error);
    });
  }
  render() {
    return (
      <Container>
        <Content>
        <Image
          source = {require('./Images/Barbell.png')}
          style={{flex: 1, height: 150, width: 150, alignSelf: 'center'}}
          resizeMode="contain"
        />
          <Form>
            <Item floatingLabel>
              <Label>email</Label>
              <Input
                onChangeText={(text) => this.setState({email:text})}
                autoCapitalize = 'none'
              />
            </Item>
            <Item floatingLabel last>
              <Label>password</Label>
              <Input
                onChangeText={(text) => this.setState({password:text})}
                autoCapitalize = 'none'
                secureTextEntry = {true}
              />
            </Item>
          </Form>
          <Button block success onPress = {() => this.login() } style={{padding: 10}}>
              <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
