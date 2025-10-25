import axios from 'axios';
import { getLanguageFromStorage } from 'src/utils/languageUtils';

const api = () => {
  const token = localStorage.getItem('dall-user-token')?.replace(/"/g, '');
  const lang = getLanguageFromStorage();

  const apiCall = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_API}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept-Language': `${lang}`,
    },
  })

  // Add a response interceptor
  apiCall.interceptors.response.use(
    (response) => {
      // If the response is successful, return the data as is
      return response;
    },
    (error) => {
      // If the error response status is 401 (Unauthenticated)
      if (error.response && error.response.status === 401) {
        // Clear user data from localStorage
        localStorage.removeItem("currentUser");
        localStorage.removeItem("dall-user-token");

        // Optionally, redirect the user to the login page
        window.location.href = "/auth/login";
      }
      // Return a rejected promise with the error objectئ
      return Promise.reject(error);
    }
  );

  return apiCall
}

export default api;



