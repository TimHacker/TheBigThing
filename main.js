
'use strict';

const React = require('react-native');
const {
  AppRegistry,
  Component,
  Text,
} = React;


class TheBigThing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <Text>The Big Thing!</Text>
    );
  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
