import React, {Component} from 'react';
import {Image, StyleSheet, Alert} from 'react-native';
import {Button, Container, Content, Form, Header, Input, Item, Label, Text} from 'native-base';
import { NavigationActions } from 'react-navigation';
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
      var { navigate } = this.props.navigation;
      email = this.state.email.toLowerCase();
      firebaseApp.auth().createUserWithEmailAndPassword(email, this.state.password).catch(function(error) {
        if (error.code === 'auth/wrong-password') {
          Alert.alert("Wrong password");
        } else {
          Alert.alert(error.toString())
        }
      }).then( (user) => {
        Alert.alert("Succesfully Registered")
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Main'})]
        });
        this.props.navigation.dispatch(resetAction);
        }
      );
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
