import React from 'react-native';

const {
  Component,
  Text,
  TouchableHighlight,
  View,
  PropTypes,
  StyleSheet,
} = React;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '300',
    textAlign: 'center',
    flex: 1,
  },
  buttonText: {
    color: 'white',
  },
});

class OtherThing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.otherTodo.task}</Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>✓ Done</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

OtherThing.propTypes = {
  otherTodo: PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
};

export default OtherThing;
