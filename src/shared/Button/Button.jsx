import icons from '../../styles/_icons.scss';
import styles from './Button.module.scss';

function Button({ buttonText }) {
  return (
    <button
      className={`${styles.button} ${icons.icon} ${icons['icon--RocketLaunch']}`}
    >
      {buttonText}
    </button>
  );
}

export default Button;
