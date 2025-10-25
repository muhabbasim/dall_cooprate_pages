
import { createContext, useState } from 'react'
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import api from './apiRequest';
import { clearUserFromStorage, saveUserToStorage } from 'src/utils/user.utils';


interface Props {
  children: React.ReactNode;
}

type InputProps = {
  id: number;
}

export interface User {
  //single user
  first_name: string | undefined;
  individual_type: string;
  second_name: string;
  last_name: string;
  email: string;
  phone: number;
  
  birth_country: number & InputProps;
  birth_city: number & InputProps;
  birth_date: string;
  residence_country: number & InputProps;
  residence_city: number & InputProps;
  gender: number & InputProps;
  nationality: number & InputProps;
  
  education_institute: number & InputProps;
  education_level: number & InputProps;
  major: number & InputProps;
  job: number & InputProps;
  experience_years: number & InputProps;
  occupation: number & InputProps;
  skills: number;
  is_verified: boolean;

  // cooperations user
  name: string;
  staff: number;
  address: string;
  password: string;
  password_confirmation: string;
  departments: number;
  country: number & InputProps;
  city: number & InputProps;
  role: string;
  company?: string;
  promissions?: string;

  is_assigned_to_company?: boolean

}

// Error types for better error handling
export interface AuthError {
  message: string;
  type: 'network' | 'validation' | 'server' | 'unauthorized' | 'unknown';
  statusCode?: number;
}

interface AuthContextProps {
  register: (formData: any) => Promise<void>;
  CooperationRegister: (formData: any) => Promise<void>;
  registerFromCompany: (formData: any) => Promise<void>;
  login: (formData: any) => Promise<void>;
  logout: () => Promise<void>;
  currentUser: User | null;
  isLoading: boolean;
  error: AuthError | null;
  clearError: () => void;
}

const defaultContext: AuthContextProps = {
  register: async () => {},
  registerFromCompany: async () => {},
  CooperationRegister: async () => {},
  login: async () => {},
  logout: async () => {},
  currentUser: null,
  isLoading: false,
  error: null,
  clearError: () => {},
};


export const AuthContext = createContext<AuthContextProps>(defaultContext);

// Utility function to handle different types of errors
const handleAuthError = (error: unknown): AuthError => {
  if (error instanceof AxiosError) {
    const statusCode = error.response?.status;
    const message = error.response?.data?.message || error.message || 'An error occurred';
    
    switch (statusCode) {
      case 400:
        return { message, type: 'validation', statusCode };
      case 401:
        return { message: 'Invalid credentials', type: 'unauthorized', statusCode };
      case 403:
        return { message: 'Access forbidden', type: 'unauthorized', statusCode };
      case 404:
        return { message: 'Service not found', type: 'server', statusCode };
      case 422:
        return { message, type: 'validation', statusCode };
      case 500:
        return { message: 'Internal server error', type: 'server', statusCode };
      default:
        if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
          return { message: 'Network error. Please check your connection.', type: 'network' };
        }
        return { message, type: 'server', statusCode };
    }
  }
  
  if (error instanceof Error) {
    return { message: error.message, type: 'unknown' };
  }
  
  return { message: 'An unexpected error occurred', type: 'unknown' };
};

export const AuthContextProvider = ({ children }: Props ) => {
  const route = useNavigate();

  // save user to the localStorage
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('dall-user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  // Clear error function
  const clearError = () => setError(null);

  // get the register axios from the login page
  const register = async (formData: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/individual/register`, formData)
      saveUserToStorage(res)
      setCurrentUser(res.data.user);
      toast.success('Registration successful!');
      
    } catch (error) {
      const authError = handleAuthError(error);
      setError(authError);
      
      // Show appropriate toast based on error type
      if (authError.type === 'validation') {
        toast.error(authError.message);
      } else if (authError.type === 'network') {
        toast.error('Network error. Please check your connection.');
      } else {
        toast.error('Registration failed. Please try again.');
      }
      
      throw authError; // Re-throw for component handling
    } finally {
      setIsLoading(false);
    }
  }

  const registerFromCompany = async (formData: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/individual/register`, formData)
      saveUserToStorage(res)
      setCurrentUser(res.data.user);
      toast.success('Registration successful!');
      
    } catch (error) {
      const authError = handleAuthError(error);
      setError(authError);
      
      // Show appropriate toast based on error type
      if (authError.type === 'validation') {
        toast.error(authError.message);
      } else if (authError.type === 'network') {
        toast.error('Network error. Please check your connection.');
      } else {
        toast.error('Registration failed. Please try again.');
      }
      
      throw authError; // Re-throw for component handling
    } finally {
      setIsLoading(false);
    }
  }

  const CooperationRegister = async (formData: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/company/register`, formData)
      saveUserToStorage(res)
      setCurrentUser(res.data.user);
      toast.success('Company registration successful!');
      
    } catch (error) {
      const authError = handleAuthError(error);
      setError(authError);
      
      // Show appropriate toast based on error type
      if (authError.type === 'validation') {
        toast.error(authError.message);
      } else if (authError.type === 'network') {
        toast.error('Network error. Please check your connection.');
      } else {
        toast.error('Company registration failed. Please try again.');
      }
      
      throw authError; // Re-throw for component handling
    } finally {
      setIsLoading(false);
    }
  }

  // get the login axios from the login page
  const login = async (formData: any) => {
    console.log('login')
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/login`, formData)
      console.log(res)
      saveUserToStorage(res)
      setCurrentUser(res.data.user);
      toast.success('Login successful!');
      
    } catch (error) {
      const authError = handleAuthError(error);
      setError(authError);
      
      // Show appropriate toast based on error type
      if (authError.type === 'unauthorized') {
        toast.error('Invalid credentials. Please check your email and password.');
      } else if (authError.type === 'validation') {
        toast.error(authError.message);
      } else if (authError.type === 'network') {
        toast.error('Network error. Please check your connection.');
      } else {
        toast.error('Login failed. Please try again.');
      }
      
      throw authError; // Re-throw for component handling
    } finally {
      setIsLoading(false);
    }
  }

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await api().post('/logout')
      clearUserFromStorage()
      
      setCurrentUser(null);
      toast.success('Logged out successfully!');
      route('/');

    } catch (error) {
      const authError = handleAuthError(error);
      setError(authError);
      clearUserFromStorage()
      setCurrentUser(null);
      // Show error but still redirect
      if (authError.type === 'network') {
        toast.error('Network error during logout, but you have been logged out locally.');
      } else {
        toast.error('Logout completed locally.');
      }
      
      route('/');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ 
      login, 
      logout, 
      currentUser, 
      register, 
      CooperationRegister, 
      registerFromCompany,
      isLoading,
      error,
      clearError
    }}>
      {children}
    </AuthContext.Provider>
  )
}