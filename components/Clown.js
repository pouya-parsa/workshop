import React from 'react';

import {
  Animated,
  Image
} from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim : new Animated.Value(this.props.startTop), //opacity
    shakeAnim : new Animated.Value(this.props.startLeft)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: this.props.endTop,
          duration: 3000,
        }
      ),
      Animated.timing(
        this.state.shakeAnim,
        {
          toValue: this.props.endLeft,
          duration: 3000,
        }
      )
    ]).start(() => this.props.showLayout());
  }

  render() {
    let { fadeAnim, shakeAnim } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          top: fadeAnim,
          left: shakeAnim,
        }}
      >
          <Image source={require('../assets/clown.jpg')} />
      </Animated.View>
    );
  }
}
export default FadeInView;
