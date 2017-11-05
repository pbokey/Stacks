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
<<<<<<< HEAD
      password = this.state.password;
      firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(function() {
        Alert.alert('signing in:: rs:23')
        firebaseApp.auth().signInWithEmailAndPassword(email , password).catch(function(error) {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                  } else {
                    alert(errorMessage);
                  }
                }).then(function() {
                    var user = firebaseApp.auth().currentUser;
                    if (user != null) {
                      var uid = user.userID;
                      var data = {
                          "name": email.substring(0, email.indexOf('@')),
                          "payment": 0,
                          "groupID": 0,
                      };
                      var key = user.uid;
                      firebaseApp.database().ref('users/' + key).set(data).catch(
                          function(error) {
                              Alert.alert(error.message);
                          }
                          ).then(
                          function() {
                            Alert.alert('Success!');//todo: get rid of this
                          });
                    }


                });
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert('got error message: ' + errorMessage);
      });
      //Alert.alert("You are registered");
=======
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
>>>>>>> d12f2bcb60285ad944a73dd5bb4237b9d355e864
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
