import React from 'react';
import styles from './AuthButton.scss';
import SvgUserIcon from '@shared/icons/UserIcon';

const AuthButton = ({ buttonText, type }) => {
  return (
    <button type={type} className={styles['auth-button']}>
      <SvgUserIcon />
      {buttonText}
    </button>
  );
};

export default AuthButton;
