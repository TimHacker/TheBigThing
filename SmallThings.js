'use strict';

import React from 'react-native';

const {
  Component,
  View,
  StyleSheet,
  ListView,
  Text,
  PropTypes,
} = React;

import SmallThing from './SmallThing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9f9f9f',
  },
});

class SmallThings extends Component {
  constructor(props, context) {
    super(props, context);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(props.smallTodos),
    };
  }

  renderRow(todo) {
    return (
      <SmallThing smallTodo={todo} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Some small things:</Text>
        <ListView
            dataSource={this.state.dataSource}
            key={this.props.smallTodos}
            renderRow={this.renderRow.bind(this)}
            style={styles.list}
        />
      </View>
    );
  }
}

SmallThings.propTypes = {
  smallTodos: PropTypes.arrayOf(React.PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  })).isRequired,
};

export default SmallThings;
