import React from 'react';
import logo from '@icons/logo.svg';
import styles from './Header.module.scss';

import AuthButton from '../../components/AuthButton/AuthButton';

function Header() {
  return (
    <header className={styles.header}>
      <menu className={styles.menu}>
        <a className={`${styles.menu__logo} ${styles.logo}`} href="#">
          <img
            className={styles.menu__img}
            src={logo}
            alt="company logo"
            width="244"
            height="32"
          />
        </a>

        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="">Marketplace</a>
          </li>
          <li className={styles.menu__item}>
            <a href="">Rankings</a>
          </li>
          <li className={styles.menu__item}>
            <a href="">Connect a wallet</a>
          </li>
        </ul>

        <AuthButton buttonText="Sign Up" />
      </menu>
    </header>
  );
}

export default Header;
