import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import SvgUserIcon from '@shared/icons/UserIcon';

const AuthButton = ({ buttonText, type }) => {
  const navigate = useNavigate(); // Инициализируем useNavigate

  const handleClick = () => {
    navigate('/auth-page'); // Указываем путь, на который нужно перейти
  };

  return (
    <button type={type} className={styles['auth-button']} onClick={handleClick}>
      <SvgUserIcon />
      {buttonText}
    </button>
  );
};

export default AuthButton;
