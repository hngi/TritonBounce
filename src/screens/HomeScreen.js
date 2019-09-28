import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {RedBall} from '../image';

export default class Homescreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.appTitle]}>TRITON BOUNCE</Text>
        <Text style={[styles.text, styles.tagline]}>Enjoy The Red Ball</Text>
        <Text style={[styles.text, styles.appDesc]}>
          This game application was built by Triton team to bring out the best
          from kids. To test how fast they are by just playing around with the
          Red Ball
        </Text>
        <Image source={RedBall} />
        <TouchableOpacity
          style={styles.beginButton}
          onPress={() => this.props.navigation.navigate('GameSetup')}>
          <Text style={styles.beginText}>START</Text>
        </TouchableOpacity>
        {/* <Button
          title="QUIT"
          onPress={() => this.props.navigation.navigate('About')}
          style={styles.text}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    color: '#FFF',
  },
  text: {
    color: '#FFF',
  },
  appTitle: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 30,
    fontFamily: 'Montserrat-Medium',
  },
  tagline: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  appDesc: {
    textAlign: 'center',
    marginTop: 10,
    padding: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  beginButton: {
    backgroundColor: '#FFF',
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 80,
    paddingLeft: 80,
    borderRadius: 5,
  },
  beginText: {
    color: '#3F89B8',
  },
});
