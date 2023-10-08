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
// icons
import logo from '../../assets/logo.svg';
//img
import banner from '../../assets/login.png';
// styles
import './SignupPage.scss';

const SignupPage = () => {
  const [account, setAccount] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();

  const handleSubmit = async () => {
    if (username.length === 0 || password.length === 0 || email.length === 0) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: '註冊失敗',
        text: '欄位不可有空值',
        showConfirmButton: true,
      });
      return;
    }

    try {
      const success = await register({
        account,
        username,
        password,
        checkPassword,
        email,
      });
      if (success) {
        Swal.fire({
          position: 'top',
          title: '註冊成功',
          timer: 1000,
          icon: 'success',
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          position: 'top',
          title: '註冊失敗!',
          icon: 'error',
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error('[Registration]:', error);
    }
  };
  const handleNavigate = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/*');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='container'>
      <div className='loginLeftContainer'>
        <img src={banner} alt='login-banner' />
      </div>
      <div className='loginContainer'>
        <div className='innerContainer'>
          <div className='loginPrompt'>
            <p className='regular-16'>您已經有帳號嗎? </p>
            <p className='link regular-16' onClick={handleNavigate}>
              立即登入
            </p>
          </div>
          <div className='title'>
            <img src={logo} alt='' />
            <h1>i-FUTURES</h1>
          </div>
          <p className='subTitle'>立即註冊，開始您今日的操作。祝您投資順利!</p>
          <div className='inputContainer'>
            <Input
              label='帳號'
              placeholder={'請輸入帳號'}
              value={account}
              onChange={(accountInputValue) => setAccount(accountInputValue)}
            />
            <Input
              label='名稱'
              placeholder={'請輸入名稱'}
              value={username}
              onChange={(nameInputValue) => setUserName(nameInputValue)}
            />
            <Input
              label='Email'
              placeholder={'請輸入Email'}
              value={email}
              onChange={(emailInputValue) => setEmail(emailInputValue)}
            />
            <Input
              type='password'
              label='密碼'
              placeholder={'請輸入密碼'}
              value={password}
              onChange={(passwordInputValue) => setPassword(passwordInputValue)}
            />
            <Input
              type='password'
              label='密碼確認'
              placeholder={'請輸入密碼'}
              value={checkPassword}
              onChange={(checkPasswordInputValue) =>
                setCheckPassword(checkPasswordInputValue)
              }
            />
          </div>
          <div className='buttonContainer'>
            <PurpleButton text={'註冊'} onClick={handleSubmit}></PurpleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
