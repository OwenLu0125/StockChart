import axiosInstance, { baseUrl } from './axiosInstance';

export const getTweets = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/transactions/publics`);
    console.log(data);
    return data.transactions;
  } catch (error) {
    console.error('[Get Tweets failed]: ', error);
  }
};
