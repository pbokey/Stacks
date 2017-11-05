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


export default class ResetPasswordScreen extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    }
  }

  static navigationOptions = {
    title: 'Reset Password',
  };

  reset() {
    email = this.state.email.toLowerCase();
    firebaseApp.auth().sendPasswordResetEmail(email).then(function() {
      Alert.alert('Check Email for Password reset instructions');
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert('failed to send password reset email, check your provided email');
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
          <Text style={{fontSize: 20, alignSelf: 'center', padding: '10%'}}>
            Enter the email you signed up with to get reset instructions
          </Text>
          <Form>
            <Item floatingLabel last>
              <Label>email</Label>
              <Input
                onChangeText={(text) => this.setState({email:text})}
                autoCapitalize = 'none'
              />
            </Item>
          </Form>
          <Button block success onPress = {() => this.reset() } style={{padding: 10}}>
              <Text>Send Email</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
