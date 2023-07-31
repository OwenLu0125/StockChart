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

export const getSingleTweet = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/transactions/${id}`);
    return data.transaction;
  } catch (error) {
    console.error('[Get Tweet failed]: ', error);
  }
};

export const likeTweet = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/transactions/${id}/like`);
    return res;
  } catch (error) {
    console.error('[Like Tweet failed]: ', error);
    throw error;
  }
};

export const unlikeTweet = async (id) => {
  try {
    const res = await axiosInstance.delete(
      `${baseUrl}/transactions/${id}/unlike`
    );
    return res;
  } catch (error) {
    console.error('[Unlike Tweet failed]: ', error);
    throw error;
  }
};
