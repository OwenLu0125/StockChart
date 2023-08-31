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

export const getTransactions = async (data) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/transactions/range`, data);
    console.log(res);
    return res;
  } catch (error) {
    console.error('getTransactions fail !!!', error);
    return error;
  }
};

export const getTodaysTransactionsData = async ({ id, date }) => {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/users/${id}/byDate?date=${date}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error('[Get History failed]: ', error);
  }
};

export const deleteTransaction = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/transactions/${id}`);

    console.log(res);
    return res;
  } catch (error) {
    console.error('[Delete Trade failed]: ', error);
    throw error;
  }
};

export const putTransaction = async ({ tradeId, transaction }) => {
  try {
    const res = await axiosInstance.put(
      `${baseUrl}/transactions/${tradeId}`,
      transaction
    );
    console.log(res);
    return res;
  } catch (error) {
    console.error('[Put Trade failed]: ', error);
  }
};
