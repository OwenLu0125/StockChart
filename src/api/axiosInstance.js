import axios from 'axios';
import { decodeToken } from 'react-jwt';
import dayjs from 'dayjs';

export const baseUrl = 'https://trade-tracker.onrender.com/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  const authToken = localStorage.getItem('authToken')
    ? JSON.parse(localStorage.getItem('authToken'))
    : null;
  console.log(authToken);
  if (authToken)
    config.headers['Authorization'] = `Bearer ${authToken.accessToken}`;

  const user = decodeToken(authToken.accessToken);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  console.log('isExpired', isExpired);

  if (!isExpired) return config;
  try {
    const res = await axios.post(`${baseUrl}/users/refreshToken`, {
      refreshToken: authToken.refreshToken,
    });
    console.log(res);
    authToken.accessToken = res.data.accessToken;
    console.log(authToken);
    localStorage.setItem('authToken', JSON.stringify(authToken));
    config.headers['Authorization'] = `Bearer ${authToken.accessToken}`;
  } catch (error) {
    console.error(error);
  }

  return config;
});

export default axiosInstance;
