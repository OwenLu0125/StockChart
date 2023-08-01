import axiosInstance, { baseUrl } from './axiosInstance';

export const getHistory = async ({ id, startDate, endDate }) => {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/users/${id}/history?startDate=${startDate}&endDate=${endDate}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error('[Get History failed]: ', error);
  }
};
