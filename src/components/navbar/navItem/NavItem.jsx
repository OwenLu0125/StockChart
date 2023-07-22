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
        <img
          src={currentPath === path ? activeIcon : inactiveIcon}
          alt={path}
        />
        <span className={currentPath === path ? 'whiten' : ''}>{title}</span>
        <span className={currentPath === path ? 'whiten' : ''}>{enTitle}</span>
      </NavLink>
    </div>
  );
};

export default NavItem;
