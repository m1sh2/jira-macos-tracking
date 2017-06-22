import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { App } from './src';

export default class jiratracking extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
      }}>
        <App/>
      </View>
    );
  }
}

AppRegistry.registerComponent('jiratracking', () => jiratracking);