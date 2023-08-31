import axiosInstance, { baseUrl } from './axiosInstance';

export const createDiary = async (data) => {
  try {
    //
    const res = await axiosInstance.post(`${baseUrl}/transactions`, {
      ...data,
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.error('creatDiary fail !!!', error);
    return error;
  }
};

export const getTransactions = async (data) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/transactions/range`, {
      ...data,
      withCredentials: true,
    });
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
      `${baseUrl}/users/${id}/byDate?date=${date}`,
      {
        withCredentials: true,
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error('[Get History failed]: ', error);
  }
};

export const deleteTransaction = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/transactions/${id}`, {
      withCredentials: true,
    });

    console.log(res);
    return res;
  } catch (error) {
    console.error('[Delete Trade failed]: ', error);
    throw error;
  }
};

export const putTransaction = async ({ tradeId, transaction }) => {
  try {
    //
    const res = await axiosInstance.put(`${baseUrl}/transactions/${tradeId}`, {
      ...transaction,
      withCredentials: true,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.error('[Put Trade failed]: ', error);
  }
};
