import axios from 'axios';

export const baseUrl = 'https://trade-tracker.onrender.com/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMSIsImFjY291bnQiOiJ1c2VyMSIsImVtYWlsIjoidXNlcjFAdXNlcjEiLCJhdmF0YXIiOm51bGwsImludHJvZHVjdGlvbiI6bnVsbCwicm9sZSI6bnVsbCwiY3JlYXRlZF9vbiI6IjIwMjMtMDctMTJUMTQ6NDg6MTMuMTczWiIsInVwZGF0ZWRfb24iOiIyMDIzLTA3LTEyVDE0OjQ4OjEzLjE3M1oiLCJpYXQiOjE2ODkxNzMzNjksImV4cCI6MTY5MTc2NTM2OX0.W04ebuQ1q9ixLkrnlNhlXMzABQKTgAyGxCWaqbSfiYk';
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export default axiosInstance;
