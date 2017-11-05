

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert
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
    email = this.state.email.toLowerCase();
    firebaseApp.auth().signInWithEmailAndPassword(email, this.state.password)
      .then((user) => {
        console.log(user.toString());
        debugger;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Main'})]
        });
        this.props.navigation.dispatch(resetAction);
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
