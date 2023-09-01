import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//api
import { getUserToken } from '../../api/auth';

const HomePage = () => {
  const { isAuthenticated, setGoogleAuth } = useAuth();
  const navigate = useNavigate();

  // google authentication
  useEffect(() => {
    // 得到URL的查詢參數
    const urlParams = new URLSearchParams(window.location.search);

    // 檢查是否包含 isAuthenticated 參數，並讀取其值
    if (urlParams.has('isAuthenticated')) {
      const isAuthenticated = urlParams.get('isAuthenticated') === 'true';
      if (isAuthenticated) {
        // 用戶已認證

        const userToken = getUserToken();
        setGoogleAuth();
        localStorage.setItem('authGoogle', isAuthenticated);
        console.log('用戶已認證');
      } else {
        return;
      }
    }
  }, [setGoogleAuth]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    } else {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);
};

export default HomePage;
