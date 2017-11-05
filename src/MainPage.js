import React, { Component } from 'react';
import firebaseApp from './firebase';
import {
  Image,
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title, Text } from 'native-base';

var user = firebaseApp.auth().currentUser;
debugger;

export default class MainScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Main Page',
  };
  render() {
    return (
      <Container>
        <Content>
          <Text>Home</Text>
        </Content>
      </Container>
    );
  }
}
