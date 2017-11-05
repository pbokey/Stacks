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



export default class HomeScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Welcome',
  }

  async getData() {
    const navpointer = this.props.navigation;
    AsyncStorage.getItem('userid').then((token) => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Main' })]
      });
      navpointer.dispatch(resetAction);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
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
