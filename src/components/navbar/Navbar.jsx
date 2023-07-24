import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from './navItem/NavItem';
import logo from '../../assets/logo.svg';
import homeGray from './icon/home.svg';
import homeWhite from './icon/home-white.svg';
import diaryGray from './icon/diary.svg';
import diaryWhite from './icon/diary-white.svg';
import historyGray from './icon/history.svg';
import historyWhite from './icon/history-white.svg';
import dashboardGray from './icon/dashboard.svg';
import dashboardWhite from './icon/dashboard-white.svg';
import settingGray from './icon/setting.svg';
import settingWhite from './icon/setting-white.svg';
import logoutIcon from './icon/logout.svg';
import './Navbar.scss';

const navItems = [
  {
    path: '/main',
    icons: {
      inactive: homeGray,
      active: homeWhite,
    },
    title: '首頁',
    en: 'Home',
  },
  {
    path: '/diary',
    icons: {
      inactive: diaryGray,
      active: diaryWhite,
    },
    title: '日記',
    en: 'Diary',
  },
  {
    path: '/history',
    icons: {
      inactive: historyGray,
      active: historyWhite,
    },
    title: '歷史',
    en: 'History',
  },
  {
    path: '/dashboard',
    icons: {
      inactive: dashboardGray,
      active: dashboardWhite,
    },
    title: '數據面板',
    en: 'Dashboard',
  },
  {
    path: '/setting',
    icons: {
      inactive: settingGray,
      active: settingWhite,
    },
    title: '設定',
    en: 'Setting',
  },
];

export const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='navbar'>
      <div className='navbarItemContainer'>
        <div className='iconBox'>
          <img src={logo} alt='' />
          <div>FUTURESMARKET</div>
        </div>
        <div className='navMenu'>
          {navItems.map((item, i) => {
            return (
              <NavItem
                key={item.en + i}
                currentPath={pathname}
                path={item.path}
                inactiveIcon={item.icons.inactive}
                activeIcon={item.icons.active}
                title={item.title}
                enTitle={item.en}
              />
            );
          })}

          <div className='navbarItem bold-18 logoutItem'>
            <div className='ItemBox'>
              <img src={logoutIcon} alt='logout' />
              <span>登出</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
