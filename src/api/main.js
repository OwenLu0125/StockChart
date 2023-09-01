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
