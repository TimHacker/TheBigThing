'use strict';

import React from 'react-native';

const {
  Text,
  StyleSheet,
  View,
  Component,
} = React;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
  },
});

class BigThing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Big thing to do</Text>
      </View>
    );
  }
}

export default BigThing;
