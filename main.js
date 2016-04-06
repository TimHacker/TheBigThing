'use strict';

import React from 'react-native';

const {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Navigator,
} = React;

import AppStore from './AppStore';

import OneBigThing from './OneBigThing';
import SmallThings from './SmallThings';
import OtherThings from './OtherThings';
import Settings from './Settings';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: '#3fc8a9',
    flex: 1,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderColor: '#f5f5f5',
    borderWidth: 1,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});

class TheBigThing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = AppStore;
  }

  onBack() {
    console.log('back pressed');
    this.nav.push({
      name: 'todos',
    });
  }

  onAddOther() {
    console.log('on add started');

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
          <View style={styles.container}>
            <Text style={styles.label}>Today</Text>
            <OneBigThing bigTodo={this.state.oneBigThing} />
            <SmallThings smallTodos={this.state.someSmallThings} />
            <OtherThings
                onAddOther={this.onAddOther.bind(this)}
                otherTodos={this.state.otherThings}
            />
            <TouchableHighlight
                onPress={this.viewSettings.bind(this)}
                style={styles.button}
            >
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableHighlight>
          </View>
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
