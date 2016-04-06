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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3fc8a9',
    flex: 1,
    justifyContent: 'flex-start',
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
        <Text style={{
          paddingTop: 30,
        }}
        >
        Settings page. New page!!
        </Text>
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
