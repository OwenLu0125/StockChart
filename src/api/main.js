import axiosInstance, { baseUrl } from './axiosInstance';

export const getTweets = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/transactions/publics`);
    return data.transactions;
  } catch (error) {
    console.error('[Get Tweets failed]: ', error);
  }
};

export const getRanking = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/transactions/top`);
    return data.topUsers;
  } catch (error) {
    console.error('[Get Ranking Data failed]: ', error);
  }
};
