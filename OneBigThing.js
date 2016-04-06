'use strict';

import React from 'react-native';

const {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Component,
  PropTypes,
} = React;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    height: 200,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  todoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 35,
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: 'blue',
  },
  input: {
    textDecorationLine: 'underline',
    borderColor: '#f0f0f0',
    borderBottomWidth: 1,
  },
});

class OneBigThing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.todoContainer}>
          <Text style={styles.label}>{this.props.bigTodo.task}</Text>
          <TextInput
              style={[styles.label, styles.input]}
          />
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
