import axiosInstance, { baseUrl } from './axiosInstance';

export const getRanking = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/users/top`);
    return data.topUsers;
  } catch (error) {
    console.error('[Get Ranking Data failed]: ', error);
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/users`);

    return data.user;
  } catch (error) {
    console.error('[Get User Data failed]: ', error);
  }
};

export const refreshToken = async () => {
  const token = JSON.parse(localStorage.getItem('authToken'));
  try {
    const res = await axiosInstance.post(`${baseUrl}/users/refreshToken`, {
      refreshToken: token.refreshToken,
    });
    return res;
  } catch (error) {
    console.error('Get Token failed !!!', error);
    return error;
  }
};
