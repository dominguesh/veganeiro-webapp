import axios from 'axios';

interface UserData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user?: {
    email: string;
    id: string;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1/auth';

export const signup = async (userData: UserData): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData: UserData): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/login`, userData);
  localStorage.setItem('userToken', response.data.token); // Save token to local storage
  return response.data;
};
