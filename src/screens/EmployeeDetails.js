import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeDetails = ({ route }) => {
  const { employee } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{employee.employee_name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Salary:</Text>
        <Text style={styles.text}>{employee.employee_salary}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.text}>{employee.employee_age}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.text}>{employee.id}</Text>
      </View>
    </View>
  );
};

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
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default EmployeeDetails;
