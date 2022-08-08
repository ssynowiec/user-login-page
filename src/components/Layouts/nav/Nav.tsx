import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(styles.navLink, isActive && styles.active)
            }
            to='/dashboard'
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
