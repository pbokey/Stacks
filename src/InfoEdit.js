import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
    Body,
    Button,
    Container,
    Content,
    Form,
    Header,
    Input,
    Item,
    Label,
    Left,
    Right,
    Title,
    Text,
    Thumbnail,
    View
} from 'native-base';
import firebaseApp from './firebase';
var name = 'Pranav Bokey';
var email = 'pbokey@gmail.com';
var password = 'abcd';

export default class InfoEdit extends Component {
        constructor(props) {
        super(props);


    this.state = {
        name: '',
        email: email,
        password: password

        }
    }
    static navigationOptions = {
        title: 'Edit Profile Information',
    }

    submitChanges() {
        email = this.state.email.toLowerCase();
        name = this.state.name;
        password = this.state.password;
        //TODO Change email and password in firebase
    }

    render() {
        return (
            <Container>
                <Form>
                    <Item floatingLabel>
                    <Label> Change Name</Label>
                    <Input
                    onChangeText={(text)=> this.setState({name:text})}
                    />
                    </Item>

                    <Item floatingLabel>
                    <Label> Change Email</Label>
                    <Input
                    onChangeText={(text)=> this.setState({email:text})}
                    />
                    </Item>

                    <Item floatingLabel>
                    <Label> Change Password</Label>
                    <Input
                    onChangeText={(text)=> this.setState({password:text})}
                    secureTextEntry = {true}
                    />
                    </Item>

                </Form>

                <Button block success onPress = {() => this.submitChanges}>
                <Text>Submit Changes</Text>
                </Button>

            </Container>

            );
    }
}