
import { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import api from './apiRequest';


interface Props {
  children: React.ReactNode;
}

type InputProps = {
  id: number;
}

interface User {

  //single user
  first_name: string | undefined;
  second_name: string;
  last_name: string;
  email: string;
  phone: string | string;
  
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

}

interface AuthContextProps {
  register: (formData: any) => void;
  CooperationRegister: (formData: any) => void;
  login: (formData: any) => void;
  logout: () => void;
  currentUser: User | null;
  // token: User | null;
}

const defaultContext: AuthContextProps = {
  register: () => {},
  CooperationRegister: () => {},
  login: () => {},
  logout: () => {},
  currentUser: null,
  // token: null,
};


export const AuthContext = createContext<AuthContextProps>(defaultContext);

export const AuthContextProvider = ({ children }: Props ) => {
  const route = useNavigate();

  // save user to the localStorage
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
    return null;
  });

  // save token to localStorage
  const [token, setToken] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const storeToken = localStorage.getItem('dallUserToken');
  
      if (storeToken) {
        try {
          // Attempt to parse the storeToken, and set it to null if parsing fails
          return JSON.parse(storeToken) || null;
        } catch (error) {
          console.error('Error parsing user data:', error);
          return null;
        }
      } else {
        return null;
      }
    }
    return null;
  });

  // get the register axios from the login page
  const register = async (formData: any) => {
    const res = await axios.post('https://dall.app/api/individual/register', formData)
    
    console.log(res.data)
    setCurrentUser(res.data.user);
    setToken(res.data.access_token)

  }

  const CooperationRegister = async (formData: any) => {
    const res = await axios.post('https://dall.app/api/company/register', formData)
    
    console.log(res)
    setCurrentUser(res.data.user);
    setToken(res.data.access_token)

  }

  // get the login axios from the login page
  const login = async (formData: any) => {

    const res = await axios.post('https://dall.app/api/login', formData)

    console.log(res.data)
    setCurrentUser(res.data.user);
    setToken(res.data.access_token)

    if( res.data?.user.role === "company") {
      route('/cooperate/dashboard')
    } else if (res.data?.user.role === 'admin') {
      route('/admin/dashboard')
    } else {
      route('/individual/dashboard')
    }
  }

  const logout = async () => {
    try {
      await api.post('/logout')
      window.location.replace('/')
      
      setCurrentUser(null)
      setToken(null)

    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    localStorage.setItem('dallUserToken', JSON.stringify(token))
  }, [currentUser, token])

  return (
    <AuthContext.Provider value={{ login, logout, currentUser, register, CooperationRegister }}>
      {children}
    </AuthContext.Provider>
  )
}