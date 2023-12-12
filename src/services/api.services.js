import axios from 'axios';

const apiUrl = import.meta.env.API_URL;

const apiService = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export default apiService;