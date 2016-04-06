'use strict';

import React from 'react-native';

const {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Component,
  PropTypes,
} = React;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    height: 200,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 40,
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: 'blue',
  },
});

class OneBigThing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.todoContainer}>
          <Text style={styles.label}>{this.props.bigTodo.task}</Text>
        </View>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>✓ Done</Text>
        </TouchableHighlight>
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
