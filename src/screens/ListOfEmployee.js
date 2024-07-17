import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchEmployees } from '../services/apiService';
import ListItem from '../components/ListItem';


const ListOfEmployee = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employees = await fetchEmployees();
        setData(employees);
        setFilteredData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEmployeePress = (employee) => {
    navigation.navigate('EmployeeDetails', { employee });
  };
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.employee_name.toLowerCase().includes(text.toLowerCase())
      );
    }
  };

  const handleDeleteEmployee = async (employeeId) => {
    try {
      const response = await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${employeeId}`);
      if (response.data.success) {
        const updatedData = data.filter(item => item.id !== employeeId);
        setData(updatedData);
        setFilteredData(updatedData);
        Alert.alert('Success', 'Employee deleted successfully.');
      } else {
        Alert.alert('Error', 'Failed to delete employee.');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      Alert.alert('Error', 'Failed to delete employee.');
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleEmployeePress(item)} style={styles.employeeContainer}>
            < ListItem salary={item.employee_salary} name={item.employee_name} delete={handleDeleteEmployee} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyList}>No employees found</Text>}
      />
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
  searchInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
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
  emptyList: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ListOfEmployee;
