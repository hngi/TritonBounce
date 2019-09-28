import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Easing,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import {Icon, Image} from 'react-native-elements';
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default class GamePlaygroundScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePaused: false,
      gameOver: false,
      duration: 3000,
      score: 0,
    };
    this.animatedValue = new Animated.ValueXY({
      x: this.generateValue(),
      y: this.generateValue(),
    });
  }

  componentDidMount() {
    // this.loopAnimate();
    // setTimeout(() => {
    //   this.animate(this.generateValue(), this.generateValue());
    // }, 100);
    const x = this.generateValue();
    const y = this.generateValue();
    const {duration} = this.state;
    this.animate(x, y, duration);
  }

  loopAnimate = () => {
    const x = this.generateValue();
    const y = this.generateValue();
    const {duration} = this.state;
    this.animate(x, y, duration);
  };

  generateValue() {
    const min = Math.ceil(-100);
    const max = Math.floor(200);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  animate = (x, y, duration) => {
    // this.animatedValue.setValue({x, y});
    Animated.loop(
      Animated.sequence([
        Animated.delay(0),
        Animated.timing(this.animatedValue, {
          toValue: {
            x: this.generateValue(),
            y: this.generateValue(),
          },
          duration,
          easing: Easing.bounce,
        }),
      ]),
    ).start();
    // Animated.loop(
    //   Animated.timing(this.animatedValue, {
    //     toValue: {
    //       x: this.generateValue(),
    //       y: this.generateValue(),
    //     },
    //     duration: 3000,
    //     easing,
    //   }),
    // ).start();
  };

  handleClick = () => {
    const x = this.generateValue();
    const y = this.generateValue();
    let {duration, score, gameOver} = this.state;
    duration -= 100;
    score += 100;

    if (duration > 0) {
      this.animate(x, y, duration);
      this.setState({duration, score});
    } else {
      this.setState({gameOver: true});
    }
  };

  redirectToScore = () => {
    const {score} = this.state;
    this.props.navigation.navigate('Score', {score});
  };

  action = () => {
    const {gamePaused} = this.state;

    if (!gamePaused) {
      this.setState({gamePaused: true});
      this.animatedValue.stopAnimation();
    } else {
      this.setState({gamePaused: false});
      this.loopAnimate();
    }
  };

  render() {
    const {score, duration, gameOver, gamePaused} = this.state;

    gameOver && this.redirectToScore();

    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, styles.heading, styles.centerText]}>
            {gamePaused ? 'BALL BOUNCES' : 'CLICK THE RED BALL'}
          </Text>
          <Text
            style={[
              styles.text,
              styles.centerText,
            ]}>{`Current Score: ${score}`}</Text>
        </View>
        <View style={[styles.animatedContainer]}>
          {Platform.OS === 'ios' ? <TouchableOpacity onPress={() => this.handleClick()}>
            <Animated.Image style={[this.animatedValue.getLayout()]} source={require('../assets/images/redBall.png')}>
            </Animated.Image>
          </TouchableOpacity> : <TouchableNativeFeedback onPress={() => this.handleClick()}>
          <Animated.Image style={[this.animatedValue.getLayout()]} source={require('../assets/images/redBall.png')}>
          </Animated.Image>
        </TouchableNativeFeedback>}
          {/* <Animated.View style={[this.animatedValue.getLayout()]}>
            <TouchableOpacity onPress={() => this.handleClick()}>
              <Image
                style={styles.block}
                source={require('../assets/images/redBall.png')}
              />
            </TouchableOpacity>
          </Animated.View> */}
          <View>
            <Icon name="pause-circle-filled" color="#DEDEDE" />
          </View>
        </View>
        <View style={[styles.centerText]}>
          <TouchableOpacity
            style={styles.actionButtons}
            onPress={() => this.action()}>
            <Text style={[styles.actionText]}>
              {gamePaused ? 'Play' : 'Pause'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButtons}
            onPress={() => this.props.navigation.navigate('GameSetup')}>
            <Text style={[styles.actionText]}>Quit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30,
  },
  animatedContainer: {
    margin: 200,
    marginBottom: 50,
    // borderWidth: 1,
    // borderColor: '#000',
    // width: '100%',
    // height: '100%',
  },
  text: {
    color: '#6C63FF',
  },
  centerText: {
    textAlign: 'center',
  },
  heading: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 30,
  },
  actionButtons: {
    backgroundColor: '#FFF',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 80,
    paddingLeft: 80,
    borderColor: '#6C63FF',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    // width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actionText: {
    color: '#6C63FF',
    textAlign: 'center',
  },
  block: {
    width: 50,
    height: 50,
  },
});
