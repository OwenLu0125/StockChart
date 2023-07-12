import PurpleButton from '../../components/button/PurpleButton/PurpleButton';
import WhiteButton from '../../components/button/WhiteButton/WhiteButton';
import Input from '../../components/input/Input';
import logo from '../../assets/logo.svg';
import './loginPage.scss';

/*
TODO:
  - base css settings
  - input component settings
*/

const LoginPage = () => {
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
          <Input label='帳號' placeholder={'請輸入帳號'} />
          <Input label='密碼' placeholder={'請輸入密碼'} />
        </div>
        <div className='buttonContainer'>
          <PurpleButton text={'登入'}></PurpleButton>
          <WhiteButton text={'後台'}></WhiteButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
