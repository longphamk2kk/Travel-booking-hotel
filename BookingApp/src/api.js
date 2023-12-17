import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = 'http://localhost:3000'; 

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = userData => {
  return api.post('/registeruser', userData);
};

export const loginUser = async userData => {
  try {
    const response = await api.post('/loginuser', userData);
    console.log(response,'aloalo12')

    const token = response.data.token;

  
    await AsyncStorage.setItem('token', token);

    return response;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.post('/logoutuser');
    console.log(response.data); // In ra console để kiểm tra

    return response;
  } catch (error) {
    throw error;
  }
};


