import { View, Text, Dimensions, StyleSheet } from 'react-native';

import React from "react";
import PropTypes from 'prop-types';

import { Avatar } from "react-native-paper";

const { width, height } = Dimensions.get('window');


class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ width: width }}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <Avatar.Text size={40} label={Array.from(this.props.name)[0]} />
          <View style={{flex: 0.1}} />  
          <View >
            <Text style={styles.employeeName}>{this.props.name}</Text>
            <Text style={styles.employeeSalary}>Salary: {this.props.salary}</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.delete(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}
ListItem.propTypes = { name: PropTypes.string.isRequired, salary: PropTypes.number.isRequired , delete: PropTypes.func.isRequired };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  employeeContainer: {
    marginBottom: 10,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  employeeSalary: {
    fontSize: 14,
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default ListItem;