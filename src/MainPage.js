import React, { Component } from 'react';
import firebaseApp from './firebase';
import {
  Image,
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title, Text } from 'native-base';


export default class MainScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Main Page',
  };
  render() {
    const { state } = this.props.navigation;
    var uid = state.params.uid;
    return (
      <Container>
        <Content>
          <Text>{uid}</Text>
        </Content>
      </Container>
    );
  }
}
