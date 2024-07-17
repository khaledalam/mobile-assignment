import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListOfEmployee from '../screens/ListOfEmployee';
import EmployeeDetails from '../screens/EmployeeDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Employees" component={ListOfEmployee} />
      <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
