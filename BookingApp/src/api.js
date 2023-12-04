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
  return api.post('/register', userData);
};

export const loginUser = async userData => {
  try {
    const response = await api.post('/login', userData);
    console.log(response,'aloalo12')

    const token = response.data.token;

  
    await AsyncStorage.setItem('token', token);

    return response;
  } catch (error) {
    throw error;
  }
};


