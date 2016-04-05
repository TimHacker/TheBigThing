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

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: '##3fc8a9',
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

  renderScene(route, nav) {
    switch (route.name) {
    case 'settings':
      return <Text style={{
        paddingTop: 30,
      }}>Settings page</Text>;
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
