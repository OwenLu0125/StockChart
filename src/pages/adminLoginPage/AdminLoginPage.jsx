 import PurpleButton from '../../components/button/purpleButton/PurpleButton';
 import WhiteButton from '../../components/button/whiteButton/WhiteButton';
 import Input from '../../components/input/Input';
 import logo from '../../assets/logo.svg';
 import './AdminLoginPage.scss';

 const AdminLoginPage = () => {
   return (
     <div className='container'>
       <div className='loginLeftContainer'></div>
       <div className='loginContainer'>
         <div className='title'>
           <img src={logo} alt='logo' />
           <h1>FUTURESMARKET</h1>
         </div>
         <p>立即登入，開始後台管理</p>
         <div className='inputContainer'>
           <Input label='帳號' placeholder={'請輸入帳號'} />
           <Input label='密碼' placeholder={'請輸入密碼'} />
         </div>
         <div className='buttonContainer'>
           <PurpleButton text={'登入'}></PurpleButton>
           <WhiteButton text={'前台'}></WhiteButton>
         </div>
       </div>
     </div>
   );
 };

 export default AdminLoginPage;
