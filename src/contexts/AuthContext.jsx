// react
import { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
// package
import { decodeToken } from 'react-jwt';
// api
import { login, register, gooleLogin } from '../api/auth';

const defaultAuthContext = {
  isAuthenticated: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  register: null, // 註冊方法
  login: null, // 登入方法
  logout: null, // 登入方法
  adminLogin: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [googleAuth, setGoogleAuth] = useState(false);
  const [payload, setPayload] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (authToken || googleAuth) {
        setIsAuthenticated(true);
        const tempPayload = decodeToken(authToken);
        setPayload(tempPayload);
      } else {
        setIsAuthenticated(false);
        setPayload(null);
      }
    };
    checkTokenIsValid();
  }, [pathname, googleAuth]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setGoogleAuth: () => {
          setIsAuthenticated(true);
          setGoogleAuth(true);
        },
        currentMember: payload && {
          id: payload.id,
          name: payload.username,
          account: payload.account,
          email: payload.email,
          avatar: payload.avatar,
          role: payload.role,
          introduction: payload.introduction,
        },
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
          const { success, accessToken } = await login({
            account: data.account,
            password: data.password,
          });
          const tempPayload = decodeToken(accessToken);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', accessToken);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return success;
        },
        gooleLogin: async () => {
          const { success } = await gooleLogin();
          console.log(success);
          if (success) {
            setIsAuthenticated(true);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
