'use strict';

let React = require('react-native');
let {
  AppRegistry,
  Component
} = React;



class TheBigThing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {

  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
