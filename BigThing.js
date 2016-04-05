'use strict';

import React from 'react-native';

const {
  Text,
  StyleSheet,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});

class BigThing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Big thing to do</Text>
      </View>
    );
  }
}

export default BigThing;
