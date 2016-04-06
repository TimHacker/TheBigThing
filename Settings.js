'use strict';

import React from 'react-native';

const {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableHighlight,
  PropTypes,
} = React;

import ColorPicker from './ColorPicker';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#3fc8a9',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    paddingBottom: 5,
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

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
            style={styles.heading}
        >
        Settings
        </Text>
        <ColorPicker />
        <TouchableHighlight
            onPress={this.props.onBack}
            style={styles.button}
        >
          <Text style={styles.buttonText}>
            Back to tasks
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Settings.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Settings;
