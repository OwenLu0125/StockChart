// react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// package
import Swal from 'sweetalert2';
// component
import PurpleButton from '../../components/button/purpleButton/PurpleButton';
import Input from '../../components/input/Input';
// context
import { useAuth } from '../../contexts/AuthContext';
// icon
import logo from '../../assets/logo.svg';
import googleLogo from '../../assets/google-icon.svg';
// styles
import './LoginPage.scss';
// Api
import { gooleLogin } from '../../api/auth';
//import { getRanking } from '../../api/main';

const LoginPage = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  window.onload = function () {
    console.log('Current cookies: ', document.cookie);
  };

  const handleLogin = async () => {
    try {
      const success = await login({
        account,
        password,
      });
      if (success) {
        Swal.fire({
          position: 'top',
          title: '登入成功!',
          icon: 'success',
          showConfirmButton: true,
        });
        return;
      }
      Swal.fire({
        position: 'top',
        title: '登入失敗!',
        icon: 'error',
        showConfirmButton: true,
      });
    } catch (error) {
      console.error('[Login Failed]:', error);
    }
  };

  const handleRegister = async () => {
    navigate('/signup');
  };

  const handleGoogleLogin = async () => {
    try {
      await gooleLogin();
    } catch (error) {
      console.error('[Login Failed]:', error);
    }
  };

  useEffect(() => {
    // const ranking = async () => {
    //   try {
    //     const data = await getRanking();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // ranking();

    if (isAuthenticated) {
      navigate('/main');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='container'>
      <div className='loginLeftContainer'></div>
      <div className='loginContainer'>
        <div className='loginPrompt'>
          <p className='regular-16'>您還沒有帳號嗎? </p>
          <p className='link regular-16' onClick={handleRegister}>
            立即註冊
          </p>
        </div>
        <div className='title'>
          <img src={logo} alt='logo' />
          <h1>FUTURESMARKET</h1>
        </div>
        <p>立即登入，開始您今日的投資。祝您投資順利!</p>
        <div className='inputContainer'>
          <Input
            label='帳號'
            placeholder={'請輸入帳號'}
            value={account}
            onChange={(accountInputValue) => setAccount(accountInputValue)}
          />
          <Input
            type='password'
            label='密碼'
            placeholder={'請輸入密碼'}
            value={password}
            onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          />
        </div>
        <div className='buttonContainer'>
          <PurpleButton text={'登入'} onClick={handleLogin}></PurpleButton>
          <button
            className='googleBtn secondary-button'
            onClick={handleGoogleLogin}
          >
            <img src={googleLogo} alt='google-logo' />
            <span className='bold-18'>Google登入</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
