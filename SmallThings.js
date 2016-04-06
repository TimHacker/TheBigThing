'use strict';

import React from 'react-native';

const {
  Component,
  View,
  StyleSheet,
  PropTypes,
} = React;

import SmallThing from './SmallThing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

class SmallThings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SmallThing smallTodo={this.props.smallTodos.firstSmallThing} />
        <SmallThing smallTodo={this.props.smallTodos.secondSmallThing} />
        <SmallThing smallTodo={this.props.smallTodos.thirdSmallThing} />
      </View>
    );
  }
}

SmallThings.propTypes = {
  smallTodos: PropTypes.shape({
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
};

export default SmallThings;
