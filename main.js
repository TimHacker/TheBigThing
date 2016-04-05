'use strict';

const React = require('react-native');

const {
  AppRegistry,
  Component,
} = React;

import BigThing from './BigThing';

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
      <BigThing />
    );
  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
