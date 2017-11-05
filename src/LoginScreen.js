

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
      Alert.alert("Please enter a valid email and password (passowrds must be at least 7 characters)");
      return;
    }
    email = this.state.email.toLowerCase();
    firebaseApp.auth().signInWithEmailAndPassword(email, this.state.password)
      .then(function(user) {
        Alert.alert("Logged In");
          this.props.navigator.push({
            component: MainScreen,
          })
      }).catch(function(error) {
          Alert.alert(error);
    });
  }
  render() {
    var { navigate } = this.props.navigation;
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
