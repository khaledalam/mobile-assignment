import axios from 'axios';

export const fetchEmployees = async () => {
  try {
    const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};
