import axiosInstance, { baseUrl } from './axiosInstance';

// 所有公開交易紀錄
export const getTweets = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/transactions/public`);
    return data.transactions;
  } catch (error) {
    console.error('[Get Tweets failed]: ', error);
  }
};

// 單筆公開交易紀錄
export const getSingleTweet = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/transactions/${id}`);
    return data.transaction;
  } catch (error) {
    console.error('[Get Tweet failed]: ', error);
  }
};

// 個人公開交易紀錄
export const getUserTweets = async () => {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/transactions/public/currentUser`
    );
    return data.publicTransactions;
  } catch (error) {
    console.error('[Get Tweet failed]: ', error);
  }
};

// 喜歡單筆公開交易
export const likeTweet = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/transactions/${id}/like`);
    return res;
  } catch (error) {
    console.error('[Like Tweet failed]: ', error);
    throw error;
  }
};

// 取消喜歡單筆公開交易
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

// 單筆公開交易的所有回覆
export const getReplies = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/transactions/${id}/replies`
    );
    return data.replies;
  } catch (error) {
    console.error('[Get Replies failed]: ', error);
  }
};

// 回覆單筆公開交易
export const postReply = async ({ id, content }) => {
  try {
    const { data } = await axiosInstance.post(
      `${baseUrl}/transactions/${id}/replies`,
      {
        content,
      }
    );
    return data.reply;
  } catch (error) {
    console.error('[Post Reply failed]: ', error);
    throw error;
  }
};

// 刪除回覆
export const deleteReply = async (id) => {
  try {
    const res = await axiosInstance.delete(
      `${baseUrl}/transactions/${id}/deleteReplies`
    );

    console.log(res);
    return res;
  } catch (error) {
    console.error('[Unlike Tweet failed]: ', error);
    throw error;
  }
};

// 公開交易紀錄
export const publishTweet = async (id) => {
  try {
    const res = await axiosInstance.post(
      `${baseUrl}/transactions/${id}/public`
    );
    console.log(res);
    return res;
  } catch (error) {
    console.error('[Publish Tweet failed]: ', error);
    throw error;
  }
};

// 隱藏公開交易紀錄
export const unpublishTweet = async (id) => {
  try {
    const res = await axiosInstance.delete(
      `${baseUrl}/transactions/${id}/public`
    );
    console.log(res);
    return res;
  } catch (error) {
    console.error('[UnPublish Tweet failed]: ', error);
    throw error;
  }
};
