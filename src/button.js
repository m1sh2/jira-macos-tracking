import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles, winHeight, winWidth } from './styles';

export class Button extends Component {
  render() {
    const stylesBody = this.props.stylesBody;
    const stylesLabel = this.props.stylesLabel;

    return (
      <TouchableHighlight
        onPress={this.props.onClick}
        style={stylesBody}
      >
        <Text style={stylesLabel}>{this.props.label}</Text>
      </TouchableHighlight>
    )
  }
}