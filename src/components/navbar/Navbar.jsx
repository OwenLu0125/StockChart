import logo from '../../assets/logo.svg';
import home from './icon/home.svg';
import diary from './icon/diary.svg';
import history from './icon/history.svg';
import dashboard from './icon/dashboard.svg';
import setting from './icon/setting.svg';
import logout from './icon/logout.svg';
import './Navbar.scss';
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarItemContainer'>
        <div className='title '>
          <img src={logo} alt='' />
          <div>FUTURESMARKET</div>
        </div>
        <br />
        <div className='navbarItem '>
          <img src={home} alt='home' />
          <div>首頁 Home</div>
        </div>
        <div className='navbarItem'>
          <img src={diary} alt='diary' />
          <div>日記 Diary</div>
        </div>
        <div className='navbarItem'>
          <img src={history} alt='history' />
          <div>歷史 History</div>
        </div>
        <div className='navbarItem'>
          <img src={dashboard} alt='dashboard' />
          <div>數據面板 Dashboard</div>
        </div>
        <div className='navbarItem'>
          <img src={setting} alt='setting' />
          <div>設定 Setting</div>
        </div>
        <div className='line'></div>
        <div className='logout'>
          <img src={logout} alt='logout' />
          <div>登出 Logout</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
