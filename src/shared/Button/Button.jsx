import iconsMask from '@styles/_iconsMask.scss';
import styles from './Button.module.scss';

function Button({ buttonText }) {
  return (
    <button
      className={`${styles.button} ${iconsMask.icon} ${iconsMask['icon--RocketLaunch']}`}
    >
      {buttonText}
    </button>
  );
}

export default Button;
