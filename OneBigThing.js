'use strict';

import React from 'react-native';

const {
  Text,
  StyleSheet,
  View,
  Component,
  PropTypes,
} = React;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#f0f0f0',
  },
});

class OneBigThing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>The one big thing: {this.props.bigTodo.task}</Text>
      </View>
    );
  }
}

OneBigThing.propTypes = {
  bigTodo: PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
};

export default OneBigThing;
