'use strict';

import React from 'react-native';

const {
  Component,
  Text,
  View,
  StyleSheet,
} = React;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'blue',
  },
});

class SmallThings extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Yolo</Text>
      </View>
    );
  }
}

export default SmallThings;
