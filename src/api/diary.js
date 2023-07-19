import axiosInstance, { baseUrl } from './axiosInstance';

export const createDiary = async (data) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/transactions`, data);
    return res;
  } catch (error) {
    console.error('creatDiary fail !!!', error);
    return error;
  }
};
