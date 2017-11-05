import React, { Component } from 'react';
import firebaseApp from './firebase';
import {
  AsyncStorage,
  Image,
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';



export default class MainScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Main Page',
  };

  async getData() {
    AsyncStorage.getItem('userid').then((token) => {
      this.setState({
        isLoading: false,
        id: token
      });
    });
  }

  resetToSplash() {
    var navpointer = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    });
    navpointer.dispatch(resetAction);
  }

  logout() {
    var that = this;
      firebaseApp.auth().signOut().then(function() {
          that.resetToSplash();
      }, function(error) {

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
    return (
      <View>
        <Text>{this.state.id}</Text>
        <Button block danger onPress = {() => this.logout() }>
          <Text>Logout</Text>
        </Button>
      </View>
    )
  }
}
