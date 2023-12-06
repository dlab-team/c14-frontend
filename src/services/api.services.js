import axios from 'axios';

const apiUrl = import.meta.env.API_URL;

const apiService = axios.create({
  baseURL: apiUrl,
});

export default apiService;