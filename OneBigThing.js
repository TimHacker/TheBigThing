'use strict';

import React from 'react-native';

const {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Component,
  PropTypes,
} = React;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 250,
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
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: '#2B92FF',
    fontSize: 12,
  },
  input: {
    textDecorationLine: 'underline',
    borderColor: '#f0f0f0',
    borderWidth: 1,
    width: 250,
    color: '#000',
    fontSize: 30,
    flex: 1,
    padding: 20,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

class OneBigThing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.todoContainer}>
          <TextInput
              multiline
              onChangeText={this.props.onBigThingChange}
              placeholder="What is your one big thing?"
              style={styles.input}
              value={this.props.bigTodo.task}
          />
          <Text
              style={[styles.label, this.props.bigTodo.completed && styles.completed]}
          >
          Task: {this.props.bigTodo.task},
          Completed: {this.props.bigTodo.completed.toString()}
          </Text>
        </View>
        <TouchableHighlight
            onPress={this.props.onCompleteBigThing}
            style={styles.button}
        >
          <Text style={styles.buttonText}>✓DONE</Text>
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
  onBigThingChange: PropTypes.func.isRequired,
  onCompleteBigThing: PropTypes.func.isRequired,
};

export default OneBigThing;
