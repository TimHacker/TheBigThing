import React from 'react-native';

const {
  Component,
  Text,
  View,
  PropTypes,
  StyleSheet,
  TouchableHighlight,
} = React;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 2.5,
    marginRight: 2.5,
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 120,
  },
  todoContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: '#2B92FF',
    fontSize: 12,
    textAlign: 'center',
  },
});

class SmallThing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.todoContainer}>
          <Text style={styles.label}>{this.props.smallTodo.task}</Text>
        </View>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>✓DONE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

SmallThing.propTypes = {
  smallTodo: PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
};

export default SmallThing;
