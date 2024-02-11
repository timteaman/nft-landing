import React from 'react';
import logo from '@icons/logo.svg';
import { Headerw, Menu, MenuList } from './Header.styles';

function Header() {
  return (
    <Headerw>
      <Menu>
        <a className="logo header__logo" href="#">
          <img src={logo} alt="company logo" width="244" height="32" />
        </a>

        <MenuList>
          <li className="menu__item">
            <a href="">Marketplace</a>
          </li>
          <li className="menu__item">
            <a href="">Rankings</a>
          </li>
          <li className="menu__item">
            <a href="">Connect a wallet</a>
          </li>
        </MenuList>

        <button className="sign-up"></button>
      </Menu>
    </Headerw>
  );
}

export default Header;
