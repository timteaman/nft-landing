import styles from './styles.module.scss';
import SvgRocketIcon from '@shared/icons/RocketIcon';

function Button({ buttonText }) {
  return (
    <button className={styles.button}>
      <SvgRocketIcon />
      {buttonText}
    </button>
  );
}

export default Button;
