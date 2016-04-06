import React from 'react-native';

const {
  Component,
  View,
  Text,
  ListView,
  PropTypes,
  StyleSheet,
  TouchableHighlight,
} = React;

import OtherThing from './OtherThing';

const styles = StyleSheet.create({
  label: {
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
    padding: 5,
  },
  button: {
    borderTopWidth: 1,
    borderColor: '#797979',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
  },
});

class OtherThings extends Component {
  constructor(props, context) {
    super(props, context);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(props.otherTodos),
    };
  }

  renderRow(todo) {
    return (
      <OtherThing otherTodo={todo} />
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.label}>Other things I might do</Text>
        <ListView
            dataSource={this.state.dataSource}
            key={this.props.otherTodos}
            renderRow={this.renderRow.bind(this)}
        />
        <TouchableHighlight
            onPress={this.props.onAddOther}
            style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

OtherThings.propTypes = {
  onAddOther: PropTypes.func.isRequired,
  otherTodos: PropTypes.arrayOf(PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  })).isRequired,
};

export default OtherThings;
