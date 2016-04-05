import React from 'react-native';

const {
  Component,
  Text,
  View,
  PropTypes,
  StyleSheet,
} = React;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
    flex: 1,
  },
});

class SmallThing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.smallTodo.task}</Text>
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
