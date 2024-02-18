import React from 'react';
import styles from './styles.module.scss';

function CardBig({ imageSrc, alt, title, artist, width, height }) {
  return (
    <article className={styles['card-big']}>
      <img
        className={styles['card-big__img']}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
      <div className={styles['card-big__box']}>
        <h2 className={`${styles['card-big__title']}`}>{title}</h2>
        <span className={styles['card-big__artist']}>{artist}</span>
      </div>
    </article>
  );
}

export default CardBig;
