'use strict';

import React from 'react-native';

const {
  AppRegistry,
  Component,
  View,
} = React;

import OneBigThing from './OneBigThing';
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
        <OneBigThing />
        <SmallThings />
      </View>
    );
  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
