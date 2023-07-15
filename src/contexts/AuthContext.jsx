// react
import { createContext, useState } from 'react';
// package
import { decodeToken } from 'react-jwt';
// api
import { login, register } from '../api/auth';

const defaultAuthContext = {
  isAuthenticated: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  register: null, // 註冊方法
  login: null, // 登入方法
  logout: null, // 登入方法
};

const AuthContext = createContext(defaultAuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: payload,
        register: async (data) => {
          const { success } = await register({
            account: data.account,
            username: data.username,
            password: data.password,
            checkPassword: data.checkPassword,
            email: data.email,
          });
          if (success) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
          return success;
        },
        login: async (data) => {
          const { success, token } = await login({
            account: data.account,
            password: data.password,
          });
          const tempPayload = decodeToken(token);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', token);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return success;
        },
        logout: () => {
          localStorage.removeItem('authToken');
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
