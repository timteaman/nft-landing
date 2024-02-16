import React from 'react';
import styles from './AuthButton.scss';
import iconsMask from '@styles/_iconsMask.scss';

const AuthButton = ({
  onClick,
  buttonText,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`${styles['auth-button']} ${iconsMask.icon} ${iconsMask['icon--user']} ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
