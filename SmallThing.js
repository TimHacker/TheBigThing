import React from 'react-native';

const {
  Component,
  Text,
  View,
  PropTypes,
  StyleSheet,
} = React;

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#ffffff',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
});

class SmallThing extends Component {
  render() {
    return (
      <View style={styles.component}>
        <Text style={styles.label}>Task:{this.props.smallTodo.task}</Text>
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
