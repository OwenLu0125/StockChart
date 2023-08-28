import axios from 'axios';

const authURL = 'https://trade-tracker.onrender.com/api';

export const login = async ({ account, password }) => {
  try {
    const {
      data: { data },
    } = await axios.post(`${authURL}/users/signin`, {
      account,
      password,
    });

    console.log(data);

    const { token } = data;
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
    return { success: false, error };
  }
};

export const gooleLogin = async () => {
  try {
    window.location.href = `${authURL}/auth/google`;
    const urlParams = new URLSearchParams(window.location.search);
    const isAuthenticated =
      urlParams.has('isAuthenticated') &&
      urlParams.get('isAuthenticated') === 'true';
    return isAuthenticated;
  } catch (error) {
    console.error('[Login Failed]:', error);
    return { success: false, error };
  }
};

export const register = async ({
  account,
  username,
  email,
  password,
  checkPassword,
}) => {
  try {
    const { data } = await axios.post(`${authURL}/users`, {
      account,
      username,
      password,
      checkPassword,
      email,
    });
    if (data) {
      return { success: true };
    }

    return data;
  } catch (error) {
    console.error('[Register Failed]: ', error);
    throw error;
  }
};

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error('[Check Permission Failed]:', error);
  }
};
