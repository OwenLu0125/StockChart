import axios from 'axios';

const authURL = 'https://trade-tracker.onrender.com/api';

export const createDiary = async ({
  quantity,
  price,
  transactionDate,
  description,
}) => {
  try {
    const res = await axios.post(`${authURL}/transactions`, {
      quantity,
      price,
      transactionDate,
      description,
    });
    return res;
  } catch (error) {
    console.error('creatDiary fail !!!', error);
  }
};
