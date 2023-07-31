import axiosInstance, { baseUrl } from './axiosInstance';

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
