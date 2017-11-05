

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
import HomeScreen from './HomeScreen';


export default class LoginScreen extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      email: 'pbokey@gatech.edu',
      password: '',
    }
  }

  static navigationOptions = {
    title: 'Login',
  };

  login() {
    email = this.state.email.toLowerCase();
    firebaseApp.auth().signInWithEmailAndPassword(email, this.state.password)
      .then(function(user) {
          this.props.navigator.push({
            component: HomeScreen;
          })
      }).catch(function(error) {
          Alert.alert(error);
    });
    Alert.alert("You are logged in!");
    navigate('MainPage')

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
