/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebaseApp from './firebase';
import {
  Image,
  View,
  Alert
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title, Text } from 'native-base';

var isLoggedIn = false;
var user = firebaseApp.auth().currentUser;
if (user) {
  isLoggedIn = true;
}


export default class HomeScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(navigate);
    if (isLoggedIn) {
      navigate('MainPage');
    }
    return (

      <Container>
        <Content>
          <Image
            source = {require('./Images/Barbell.png')}
            style={{flex: 1, height: 150, width: 150, alignSelf: 'center'}}
            resizeMode="contain"
          />
          <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center', alignItems: 'center'}}>
            <Button
              onPress = {() =>
                navigate('Register')
              }
              style={{margin: 5}}
            >
              <Text>Register</Text>
            </Button>
            <Button
              onPress = {() =>
                navigate('Login')
              }
              style={{margin: 5}}
            >
            <Text>Login</Text>
          </Button>
        </View>
        </Content>
      </Container>
    );
  }
}
