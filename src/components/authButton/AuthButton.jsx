import React from 'react';
import styles from './AuthButton.scss';
import icons from '../../styles/_icons.scss';

const AuthButton = ({ onClick, buttonText }) => {
  return (
    <button
      className={`${styles['auth-button']} ${icons.icon} ${icons['icon--user']} `}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
