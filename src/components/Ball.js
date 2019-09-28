import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {array, object, string} from 'prop-types';

import {RedBall} from '../image';

export default class Ball extends Component {
  render() {
    return <Image style={styles.redBall} source={RedBall} />;
  }
}

const styles = StyleSheet.create({
  redBall: {
    marginBottom: 70,
    marginTop: 20,
  },
});

Ball.propTypes = {
  size: array,
  body: object,
  color: string,
};
