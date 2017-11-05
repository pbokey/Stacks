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
import InfoEdit from './InfoEdit';

//TODO: get email from firebase
var email = "someone pls get this shit"

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: email
    }
    render() {
        const {navigate} = this.props.navigation;
        console.log(navigate);
        return (
            <Container>
                <TouchableOpacity style = {{alignSelf: 'flex-end'}}
                onPress ={ () =>
                    navigate('InfoEdit')
                    }>
                    <Image
                    resizeMode = 'contain'
                    style = {{height: 30, width: 30, }}
                    source = {require('./Images/edit.png')}
                    />
                </TouchableOpacity>
            </Container>
            );
    }
}