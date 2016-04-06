'use strict';

import React from 'react-native';

const {
  AppRegistry,
  Component,
  Navigator,
} = React;

import AppStore from './AppStore';

import Todos from './Todos';
import Settings from './Settings';

class TheBigThing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = AppStore;
  }

  onBack() {
    this.nav.pop();
  }

  onAddOther() {
    const newTodo = { task: 'newly added' };
    this.state.otherThings.push(newTodo);
  }

  viewSettings() {
    this.nav.push({
      name: 'settings',
    });
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route, nav) {
    switch (route.name) {
    case 'settings':
      return (
      <Settings onBack={this.onBack.bind(this)} />
    );
    default:
      return (
          <Todos
              onAddOther={this.onAddOther.bind(this)}
              oneBigThing={this.state.oneBigThing}
              otherThings={this.state.otherThings}
              someSmallThings={this.state.someSmallThings}
              viewSettings={this.viewSettings.bind(this)}
          />
        );
    }
  }

  render() {
    return (
      <Navigator
          configureScene={this.configureScene}
          initialRoute={{ name: 'tasklist', index: 0 }}
          ref={((nav) => {
            this.nav = nav;
          })}
          renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('main', () => TheBigThing);
