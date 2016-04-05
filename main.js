'use strict';

import React from 'react-native';

const {
  AppRegistry,
  Component,
  View,
} = React;

import BigThing from './BigThing';
import SmallThings from './SmallThings';

class TheBigThing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      oneBigThing: '',
      someSmallThings: [
        {
          task: 'Learn React native',
        },
        {
          task: 'Take a nap',
        },
      ],
    };
  }

  render() {
    return (
      <View>
        <BigThing />
        <SmallThings />
      </View>
    );
  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
