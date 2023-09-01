// react
import { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
// package
import { decodeToken } from 'react-jwt';
// api
import { login, register } from '../api/auth';
import { getCurrentUser } from '../api/main';
import { googleLogout } from '../api/auth';

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
  //const [googleAuth, setGoogleAuth] = useState(false);
  const [payload, setPayload] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authGoogle = localStorage.getItem('authGoogle');
      const authToken = JSON.parse(localStorage.getItem('authToken'));
      // console.log(authToken); 觀察資料用
      if (authToken) {
        setIsAuthenticated(true);
        const tempPayload = decodeToken(authToken.accessToken);
        // console.log(tempPayload); 觀察資料用
        setPayload(tempPayload);
      } else if (authGoogle) {
        setIsAuthenticated(true);
        const user = await getCurrentUser();
        setPayload(user);
      } else {
        setIsAuthenticated(false);
        setPayload(null);
      }
    };
    checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setGoogleAuth: () => {
          setIsAuthenticated(true);
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
          const { success, accessToken, refreshToken } = await login({
            account: data.account,
            password: data.password,
          });
          const tempPayload = decodeToken(accessToken);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);

            localStorage.setItem(
              'authToken',
              JSON.stringify({ accessToken, refreshToken })
            );
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return success;
        },
        logout: async () => {
          await googleLogout();
          setIsAuthenticated(false);
          setPayload(null);
          localStorage.removeItem('authToken');
          localStorage.removeItem('authGoogle');
          console.log('new deployment');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
