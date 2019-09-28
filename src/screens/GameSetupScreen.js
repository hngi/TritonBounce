import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';

import {RedBall} from '../image';

export default class GameSetupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.appTitle]}>TRITON BOUNCE</Text>
        <Image style={styles.redBall} source={RedBall} />
        <TouchableOpacity
          style={styles.actionButtons}
          onPress={() => this.props.navigation.navigate('GamePlayground')}>
          <Icon name="add-circle" color="#FFF" />
          <Text style={[styles.actionText, styles.test]}>New Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButtons}
          onPress={() => this.props.navigation.navigate('Settings')}>
          <Icon
            name="wrench"
            type="material-community"
            color="#FFF"
            style={styles.test}
          />
          <Text style={[styles.actionText, styles.test]}>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#6C63FF',
  },
  appTitle: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 30,
  },
  actionButtons: {
    backgroundColor: '#6C63FF',
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 80,
    paddingLeft: 80,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionText: {
    color: '#FFF',
  },
  test: {
    marginLeft: 20,
  },
  redBall: {
    marginBottom: 70,
    marginTop: 20,
  },
});
