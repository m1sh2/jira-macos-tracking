import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TextInput,
  AppState
} from 'react-native';
import { Button } from './button';
import { styles } from './styles';
import { xhr } from './xhr';
// import { storage } from './storage';
import { store } from './store';

let i = 0;

export class Login extends Component {
  constructor() {
    super();
    
    this.state = {
      
    };
  }

  // onClick(e) {
  //   this.logIn();
  // }

  logIn() {
    const data = {
      username: 'mykhailo.datsko',
      password: 'si9LCbs3'
    };

    xhr.post('auth/1/session', data).then(response => {
      console.log(response);

      xhr.get('api/2/myself').then(response => {
        console.log(response);
        // this.userName = response.displayName;
        
        let state = store.getState();
        console.log('state', state);
        state.userName = response.displayName;
        state.isAuth = true;

        store.dispatch({ type: 'UPDATE', payload: state });

        // store.dispatch({ type: 'INCREMENT' });
        // store.dispatch({ type: 'DECREMENT' });

        this.forceUpdate();

        // storage.set('userName', response.displayName, value => {
        //   console.log(value);

          
        //   // AppState.currentState = {
        //   //   yes: 'no'
        //   // };
        // });
      });
    });
  }

  render() {
    return (
      <View style={styles.login}>
        <View style={styles.labelRow}>
          <Text style={styles.label}>
            Username
          </Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            numberOfLines={1}
          />
        </View>
        
        <View style={styles.labelRow}>
          <Text style={styles.label}>
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            onChange={e => {this.getPasswordInput(e)}}
            placeholder="Password"
            style={styles.input}
          />
        </View>
        
        <View style={{alignItems: 'center'}}>
          <Button
            stylesBody={styles.buttonBody}
            stylesLabel={styles.buttonLabel}
            label="Log in"
            onClick={e => {this.logIn(e)}}
          />
        </View>
      </View>
    );
  }
}
