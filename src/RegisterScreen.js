import React, {Component} from 'react';
import {Image, StyleSheet, Alert} from 'react-native';
import {Button, Container, Content, Form, Header, Input, Item, Label, Text} from 'native-base';
import firebaseApp from './firebase';

export default class RegisterScreen extends Component {
    constructor(props) {
      super(props);

      this.state = {
        email: '',
        password: '',
      }
    }

    static navigationOptions = {
      title: 'Register',
    };

    register() {
      email = this.state.email.toLowerCase();
      firebaseApp.auth().createUserWithEmailAndPassword(email, this.state.password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
      Alert.alert("You are registered");
    }

    render() {
        return (
            <Container>
                <Content>
                  <Image source = {require('./Images/Barbell.png')}
                        style = {styles.logo}
                        resizeMode = 'contain'
                    />
                    <Form>
                        <Item floatingLabel>
                          <Label>email</Label>
                          <Input
                            onChangeText={(text) => this.setState({email:text})}
                            autoCapitalize = 'none'
                          />
                        </Item>

                        <Item floatingLabel>
                          <Label>password</Label>
                          <Input
                            onChangeText={(text) => this.setState({password:text})}
                            autoCapitalize = 'none'
                            secureTextEntry = {true}
                          />
                        </Item>
                    </Form>
                    <Button block success
                      onPress={() => this.register()}
                    >
                      <Text> Register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create ({

    logo: {
        flex: 1,
        height: 150,
        width: 150,
        alignSelf: 'center'

    }

});
