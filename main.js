'use strict';

import React from 'react-native';

const {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
} = React;

import OneBigThing from './OneBigThing';
import SmallThings from './SmallThings';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

class TheBigThing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      oneBigThing: {
        task: 'The big todo',
        completed: false,
      },
      someSmallThings: [
        {
          task: 'Learn React native',
        },
        {
          task: 'Take a nap',
        },
        {
          task: 'Eat!',
        },
      ],
      otherThings: [
        {
          task: 'Brush teeth',
        },
        {
          task: 'non essential',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Today</Text>
        <OneBigThing bigTodo={this.state.oneBigThing} />
        <SmallThings smallTodos={this.state.someSmallThings} />
      </View>
    );
  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
