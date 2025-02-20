import axios from 'axios';
import { useRouter } from 'next/router';

interface UserData {
  email: string;
  password: string;
  name?: string;
}

interface AuthResponse {
  token: string;
  user?: {
    email: string;
    id: string;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1/auth';

// Initialize axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Clear invalid token
      localStorage.removeItem('userToken');
      localStorage.removeItem('user');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export const signup = async (userData: UserData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/register', userData);
  return response.data;
};

export const login = async (userData: UserData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/login', userData);
  const { token, user } = response.data;
  
  // Save auth data
  localStorage.setItem('userToken', token);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('user');
  window.location.href = '/auth/login';
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('userToken');
};

// Hook for protected routes
export const useAuthProtection = () => {
  const router = useRouter();
  
  if (typeof window !== 'undefined' && !isAuthenticated()) {
    router.replace('/auth/login');
    return false;
  }
  
  return true;
};
