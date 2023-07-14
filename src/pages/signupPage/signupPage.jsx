// react
import { useState } from 'react';
// package
import Swal from 'sweetalert2';
// component
import PurpleButton from '../../components/button/PurpleButton/PurpleButton';
import Input from '../../components/input/Input';
// api
import { register } from '../../api/auth';
// icons
import logo from '../../assets/logo.svg';
// styles
import './signupPage.scss';

const SignupPage = () => {
  const [account, setAccount] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const { success } = await register({
        account,
        username,
        password,
        checkPassword,
        email,
      });
      // console.log(success);
      if (success) {
        Swal.fire({
          position: 'top',
          title: '登入成功',
          timer: 1000,
          icon: 'success',
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error('[Registration]:', error);
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
        <p>立即註冊，開始您今日的投資。祝您投資順利!</p>
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
  );
};

export default SignupPage;
