import axios, { isAxiosError } from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const apiService = axios.create({
  baseURL: apiUrl || 'http://localhost:3001/api',
  withCredentials: true,
});

apiService.interceptors.response.use(
  response => response,
  function (error) {
    if (isAxiosError(error)) {
      if (
        (error.response.status === 401 || error.response.status === 403) &&
        !window.location.pathname.includes('auth')
      ) {
        window.localStorage.clear();
        window.location.reload();
      }
    }
    return Promise.reject(error);
  }
);

export default apiService;
