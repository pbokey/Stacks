import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Button, Container, Content, Form, Header, Input, Item, Label, Text} from 'native-base';


export default class JoinScreen extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                <Image source = {require('./barbell.png')}
                        style = {styles.logo}
                        resizeMode = 'contain'
                        />
                    <Form>
                        <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                        </Item>

                        <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                        secureTextEntry = {true}
                        />
                        </Item>

                    </Form>
                    <Button block success>
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