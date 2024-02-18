import React from 'react';
import styles from './Header.module.scss';
import AuthButton from '@components/authButton/AuthButton';
import Logo from '@shared/Logo/Logo';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <Logo alt="conpany logo" width="243" height="32" href="!#" />
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="!#">Marketplace</a>
          </li>
          <li className={styles.menu__item}>
            <a href="!#">Rankings</a>
          </li>
          <li className={styles.menu__item}>
            <a href="!#">Connect a wallet</a>
          </li>
        </ul>

        <AuthButton type="button" buttonText="Sign Up" />
      </nav>
    </header>
  );
}

export default Header;
