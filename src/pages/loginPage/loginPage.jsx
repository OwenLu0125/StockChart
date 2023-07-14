// react
import { useState } from 'react';
// package
import Swal from 'sweetalert2';
// component
import PurpleButton from '../../components/button/PurpleButton/PurpleButton';
import WhiteButton from '../../components/button/WhiteButton/WhiteButton';
import Input from '../../components/input/Input';
// api
import { login } from '../../api/auth';
// icon
import logo from '../../assets/logo.svg';
// styles
import './loginPage.scss';

/*
TODO:
  - feat: page turn function 
*/

const LoginPage = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

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
      }
    } catch (error) {
      console.error('[Login Failed]:', error);
    }
  };

  return (
    <div className='container'>
      <div className='loginLeftContainer'></div>
      <div className='loginContainer'>
        <div className='loginPrompt'>
          您已經有帳號了嗎? <a>立即登入</a>
        </div>
        <div className='title'>
          <img src={logo} alt='' />
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
          <WhiteButton text={'後台'}></WhiteButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
