import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton}>
          <Icon name="close" color="#6C63FF" />
        </TouchableOpacity>
        <Text style={[styles.text, styles.heading]}>Settings</Text>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Settings')}>
          <View style={styles.menuLeft}>
            <Icon name="remove-red-eye" color="#6C63FF" />
            <Text style={styles.menuText}>View High Score</Text>
          </View>
          <Icon name="angle-right" type="font-awesome" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Settings')}>
          <View style={styles.menuLeft}>
            <Icon name="volume-off" color="#6C63FF" />
            <Text style={styles.menuText}>Mute Game Sound</Text>
          </View>
          <Icon name="toggle-on" color="#6C63FF" type="font-awesome" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Settings')}>
          <View style={styles.menuLeft}>
            <Icon name="remove-red-eye" color="#6C63FF" />
            <Text style={styles.menuText}>Volume</Text>
          </View>
          <Icon name="toggle-on" type="font-awesome" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    color: '#6C63FF',
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  text: {
    color: '#6C63FF',
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
  // tagline: {
  //   fontFamily: 'Montserrat-Regular',
  //   fontSize: 14,
  // },
  // appDesc: {
  //   textAlign: 'center',
  //   marginTop: 10,
  //   padding: 20,
  //   fontFamily: 'Montserrat-Regular',
  //   fontSize: 12,
  // },
  // beginButton: {
  //   backgroundColor: '#FFF',
  //   marginTop: 50,
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   paddingRight: 80,
  //   paddingLeft: 80,
  //   borderRadius: 5,
  // },
  // beginText: {
  //   color: '#3F89B8',
  // },
});
