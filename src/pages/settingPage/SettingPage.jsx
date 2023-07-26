import { useState } from 'react';
// components
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import PrimaryInput from '../../components/primaryInput/PrimaryInput';
// css
import './SettingPage.scss';

const SettingPage = () => {
  const [account, setAccount] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  return (
    <div className='settingPage'>
      <Navbar />
      <div className='settingBody'>
        <Header />
        <div className='settingMain'>
          <div className='photoEdit'></div>
          <div className='settingInput'>
            <PrimaryInput
              label='帳號'
              placeholder={'請輸入帳號'}
              value={account}
              onChange={(accountInputValue) => setAccount(accountInputValue)}
            />
            <PrimaryInput
              label='名稱'
              placeholder={'請輸入名稱'}
              value={username}
              onChange={(nameInputValue) => setUserName(nameInputValue)}
            />
            <PrimaryInput
              label='Email'
              placeholder={'請輸入Email'}
              value={email}
              onChange={(emailInputValue) => setEmail(emailInputValue)}
            />
            <PrimaryInput
              type='password'
              label='密碼'
              placeholder={'請輸入密碼'}
              value={password}
              onChange={(passwordInputValue) => setPassword(passwordInputValue)}
            />
            <PrimaryInput
              type='password'
              label='密碼確認'
              placeholder={'請輸入密碼'}
              value={checkPassword}
              onChange={(checkPasswordInputValue) =>
                setCheckPassword(checkPasswordInputValue)
              }
            />
          </div>
          <button className='secondary-button bold-16'>更改資料</button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
