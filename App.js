import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import SignIn from './screen/signin';

const theme = {
  Button: {
    titleStyle: {
      color: '#4F6D7A',
      fontWeight: 'bold'
    },
    buttonStyle: {
      backgroundColor: '#FFF',
      borderRadius: 100,
      height: 50
    }
  },
  Text: {
    style: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  Input: {
    containerStyle: {
      marginVertical: 8
    },
    inputContainerStyle: {
      borderBottomColor: '#FFF'
    },
    labelStyle: {
      color: '#FFF'
    },
    inputStyle: {
      color: '#FFF'
    }
  }
};

export default class App extends Component {
  
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        />
        <SignIn/>
      </ThemeProvider>
    );
  }
}