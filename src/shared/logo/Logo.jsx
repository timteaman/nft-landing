import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import SvgLogoMainIcon from '@shared/icons/LogoMainIcon';

function Logo({ alt, width, height }) {
  return (
    <Link to="/" className={styles.logo} aria-label={alt}>
      <SvgLogoMainIcon className={styles.logo__img} style={{ width, height }} />
    </Link>
  );
}

export default Logo;
