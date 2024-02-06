import axios from 'axios';

const token = localStorage.getItem('dallUserToken')?.replace(/"/g, '');

const api = axios.create({
  baseURL: 'https://dall.app/api',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})

export default api;






// withCredentials: true,
// 'Content-Type': 'application/json',
// 'Accept': 'application/json',