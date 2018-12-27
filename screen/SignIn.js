import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {
  Text,
  Button,
  Input
} from 'react-native-elements';

export default class SignIn extends Component {
  
  state = {
    eyeIcon: `visibility${ this.securePass ? '' : '-off'}`,
    securePass: true
  }

  render() {
    return (
        <View
          style={{
            padding: 16,
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            backgroundColor: '#4F6D7A'
          }}
        >
            <Text>
              PLEASE SIGN IN
            </Text>

            <Input
              placeholder="Username"
              label="Username"
              leftIcon={{type: 'material', name: 'person', color: '#FFF'}}
              errorMessage="error check"
              errorStyle={{color: 'red'}}
            />
            
            <Input
              placeholder="Password"
              Label="Password"
              leftIcon={{type: 'material', name: 'lock', color: '#FFF'}}
              rightIcon={{type: 'material', name: this.state.eyeIcon, color: '#FFF', onPress: () => this.setState({securePass: !this.state.securePass, eyeIcon: `visibility${ this.state.securePass ? '' : '-off'}`})}}
              errorMessage="error check"
              errorStyle={{color: 'red'}}
              secureTextEntry={this.state.securePass}
            />

            <Button
              title="SIGN IN"
            />
            
          </View>
    );
  }
}