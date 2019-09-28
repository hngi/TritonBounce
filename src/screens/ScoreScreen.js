import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';

export default class ScoreScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton}>
          <Icon name="close" color="#FFF" />
        </TouchableOpacity>
        <Text style={[styles.text, styles.heading]}>High Score</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/score.png')} />
        </View>
        <View>
          <Text style={[styles.text]}>{`Score: ${JSON.stringify(
            navigation.getParam('score'),
          )}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF',
    color: '#FFF',
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  text: {
    color: '#FFF',
  },
  heading: {
    fontWeight: '500',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 70,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'left',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 15,
    marginBottom: 50,
  },
  menuLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuText: {
    marginLeft: 10,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
