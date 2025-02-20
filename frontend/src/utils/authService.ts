import axios, { AxiosResponse } from 'axios';

interface UserData {
  email: string;
  password: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1/auth';

export const signup = async (userData: UserData): Promise<AxiosResponse> => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData: UserData): Promise<AxiosResponse> => {
const response = await axios.post(`${API_URL}/login`, userData);
localStorage.setItem('userToken', response.data.token); // Save token to local storage
return response.data;
};
