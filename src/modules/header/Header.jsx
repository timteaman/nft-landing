import React from 'react';
import styles from './header.module.scss';
import logo from '@icons/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <a className="logo header__logo" href="#">
          <img src={logo} alt="company logo" width="244" height="32" />
        </a>

        <ul className={styles.menu__list}>
          <li className="menu__item">
            <a href="">Marketplace</a>
          </li>
          <li className="menu__item">
            <a href="">Rankings</a>
          </li>
          <li className="menu__item">
            <a href="">Connect a wallet</a>
          </li>
        </ul>

        <button className="sign-up"></button>
      </nav>
    </header>
  );
}

export default Header;
