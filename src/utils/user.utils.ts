import { User } from "src/context/authContext";

// User data persistence utilities
export const saveUserToStorage = (res: { data: { user: User, access_token: string } }): void => {
  try {
    localStorage.setItem('dall-user', JSON.stringify(res.data.user));
    localStorage.setItem('dall-user-token', JSON.stringify(res.data.access_token));
  } catch (error) {
    console.error('Error saving user to storage:', error);
  }
};

export const getUserFromStorage = (): User | null => {
  try {
    const stored = localStorage.getItem('dall-user');
    if (!stored) return null;
    
    const userData = JSON.parse(stored);
    return userData;
  } catch (error) {
    console.error('Error getting user from storage:', error);
    return null;
  }
};

export const clearUserFromStorage = (): void => {
  try {
    localStorage.removeItem('dall-user');
    localStorage.removeItem('dall-user-token');
  } catch (error) {
    console.error('Error clearing user from storage:', error);
  }
};
