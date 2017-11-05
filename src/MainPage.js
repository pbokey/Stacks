import React, { Component } from 'react';
import firebaseApp from './firebase';
import {
  AsyncStorage,
  Image,
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title, Text } from 'native-base';



export default class MainScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Main Page',
  };
  async getData() {
    AsyncStorage.getItem('userid').then((token) => {
      debugger;
      this.setState({
        isLoading: false,
        id: token
      });
    });
  }
  componentWillMount() {
      this.setState({ isLoading: true });
      this.getData();
  }

  render() {

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>
    }
    return <View><Text>{this.state.id}</Text></View>
  }
}
