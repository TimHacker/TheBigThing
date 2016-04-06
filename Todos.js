import React from 'react-native';

const {
  Component,
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  PropTypes,
} = React;

import OneBigThing from './OneBigThing';
import SmallThings from './SmallThings';
import OtherThings from './OtherThings';

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

class Todos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Today</Text>
        <OneBigThing bigTodo={this.props.oneBigThing} />
        <SmallThings smallTodos={this.props.someSmallThings} />
        <OtherThings
            onAddOther={this.props.onAddOther}
            otherTodos={this.props.otherThings}
        />
        <TouchableHighlight
            onPress={this.props.viewSettings}
            style={styles.button}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Todos.propTypes = {
  onAddOther: PropTypes.func.isRequired,
  oneBigThing: PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
  otherThings: PropTypes.arrayOf(PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  })).isRequired,
  someSmallThings: PropTypes.shape({
    firstSmallThing: PropTypes.shape({
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    }),
    secondSmallThing: PropTypes.shape({
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    }),
    thirdSmallThing: PropTypes.shape({
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    }),
  }).isRequired,
  viewSettings: PropTypes.func.isRequired,
};

export default Todos;
