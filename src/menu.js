import React, { Component } from 'react';
import { ListView, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import { winHeight, winWidth, styles } from './styles';
import { Button } from './button';

let i = 0;

export class Menu extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: 'Get list',
          onClick: this.getList
        },
        {
          title: 'Settings',
          onClick: () => {}
        }
      ]),
    };
  }

  getOne() {
    const data = 'SOR-24065'

    xhr.get(`api/2/issue/${data}`).then(response => {
      console.log(response);
    });
  }

  getList() {
    const data = {
      rapidViewId: 5,
      selectedProjectKey: 'SOR',
      activeQuickFilters: 41
    };

    xhr.get('greenhopper/1.0/xboard/work/allData.json', data).then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <View style={styles.menu}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }

  _renderRow(rowData) {
    return (
      <Button
        stylesBody={{
          
        }}

        stylesLabel={{
          
        }}

        onClick={rowData.onClick}

        label={rowData.title}
      />
    );
  }
}
