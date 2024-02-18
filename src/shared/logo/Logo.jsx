import React from 'react';
import styles from './Logo.module.scss';
import SvgLogoMainIcon from '@shared/icons/LogoMainIcon';

function Logo({ href, alt, width, height }) {
  return (
    <a className={styles.logo} href={href} aria-label={alt}>
      <SvgLogoMainIcon className={styles.logo__img} style={{ width, height }} />
    </a>
  );
}

export default Logo;
