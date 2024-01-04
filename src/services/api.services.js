import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const apiService = axios.create({
  baseURL: apiUrl || 'http://localhost:3001/api',
  withCredentials: true,
});

export default apiService;
