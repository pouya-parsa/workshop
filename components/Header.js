import React from 'react';

import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.children}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Enferad",
  }
})
export default Header;
