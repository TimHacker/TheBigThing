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
import AppStore from './AppStore';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '##3fc8a9',
    flex: 1,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
});

class TheBigThing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = AppStore;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Today</Text>
        <OneBigThing bigTodo={this.state.oneBigThing} />
        <SmallThings smallTodos={this.state.someSmallThings} />
      </View>
    );
  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
