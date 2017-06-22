import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Image,
  TextInput,
  AppState
} from 'react-native';
import { xhr } from './xhr';
import { Menu } from './menu';
import { Login } from './login';
import { Button } from './button';
import { styles, winHeight, winWidth } from './styles';
// import { storage } from './storage';
import { store } from './store';

let menuPos = 0;

export class App extends Component {
  state = {
    userName: '',
    isAuth: false
  };

  constructor() {
    super();

    store.subscribe(() => {
      const stateStore = store.getState();
      console.log('app state', stateStore);

      let stateLocal = this.state;

      stateLocal.isAuth = stateStore.isAuth;

      if (stateStore.isAuth && stateLocal.userName !== stateStore.userName) {
        stateLocal.userName = stateStore.userName;
      }

      // const stateLocal = this.updateState(stateStore);
      
      this.setState(stateLocal);
    });
  }

  // updateState(state) {
  //   let stateLocal = this.state;

  //   for (let i in stateLocal) {
  //     if (stateLocal[i] !== state[i]) {
  //       stateLocal[i] = state[i];
  //     }
  //   }

  //   return stateLocal;
  // }

  // componentDidMount() {
  //   AppState.addEventListener('change', this._handleAppStateChange);
  //   // AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
  // }

  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this._handleAppStateChange);
  //   // AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
  // }

  // _handleAppStateChange(e) {
  //   console.log('_handleAppStateChange', e, this.state);
  // }

  openMenu() {
    this.setState({menuPos: 0});
  }

  closeMenu() {
    this.setState({menuPos: -winWidth});
  }

  getPasswordInput(e) {
    console.log(e);
  }

  render() {
    return (
      <View style={{
        position: 'absolute',
        backgroundColor: '#666666',
        width: winWidth,
        height: winHeight,
        left: 0,
        top: 0
      }}>
        <View style={{
          backgroundColor: '#555555',
          
          height: 20
        }}></View>
        <Text style={styles.welcome}>
          JIRA Management Tool
        </Text>

        {this.state.isAuth
          ? <Menu/>
          : null
        }

        {this.state.isAuth
          ? <Text style={{
              position: 'absolute',
              right: 10,
              top: 25,
              color: '#ffffff'
            }}>
              <Text style={{}}>{this.state.userName}</Text>
            </Text>
          : <Login/>
        }
      </View>
    );
  }
}
