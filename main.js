'use strict';

let React = require('react-native');
let {
  AppRegistry,
  Component,
  Text
} = React;



class TheBigThing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <Text>The Big Thing!</Text>
    )
  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
