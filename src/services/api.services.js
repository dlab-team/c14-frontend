import axios from 'axios';

const apiUrl = import.meta.env.API_URL;

const apiService = axios.create({
  baseURL: apiUrl || 'http://localhost:3001/api',
  withCredentials: true,
});

export default apiService;
