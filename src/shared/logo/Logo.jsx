import React from 'react';
import styles from './Logo.module.scss';

function Logo(props) {
  const { src, href, alt, width, height } = props;

  return (
    <a className={styles.logo} href={href}>
      <img
        className={styles.logo__img}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
}

export default Logo;
