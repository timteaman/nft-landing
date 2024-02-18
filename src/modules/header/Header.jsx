import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import AuthButton from '@components/authButton/AuthButton';
import Logo from '@shared/Logo/Logo';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <Logo alt="conpany logo" width="243" height="32" />

        <ul className={styles.menu__list}>
          <li
            className={`${styles.menu__item} ${
              isActive('/marketplace') ? styles.active : ''
            }`}
          >
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li
            className={`${styles.menu__item} ${
              isActive('/rankings') ? styles.active : ''
            }`}
          >
            <Link to="/rankings">Rankings</Link>
          </li>
          <li
            className={`${styles.menu__item} ${
              isActive('/connect-wallet') ? styles.active : ''
            }`}
          >
            <Link to="/connect-wallet">Connect a wallet</Link>
          </li>
        </ul>

        <AuthButton type="button" buttonText="Sign Up" />
      </nav>
    </header>
  );
}

export default Header;
