import { NavLink } from 'react-router-dom';
import './NavItem.scss';

const NavItem = ({
  currentPath,
  path,
  inactiveIcon,
  activeIcon,
  title,
  enTitle,
}) => {
  return (
    <div
      className={`navbarItem bold-18 ${currentPath === path ? 'seleted' : ''}`}
    >
      <NavLink to={path}>
        <div className='ItemBox'>
          <img
            src={currentPath === path ? activeIcon : inactiveIcon}
            alt={path}
          />
          <span className={currentPath === path ? 'whiten' : ''}>{title}</span>
          <span className={currentPath === path ? 'whiten' : ''}>
            {enTitle}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default NavItem;
