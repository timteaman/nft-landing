import React from 'react';
import styles from './CardBig.module.scss';
import iconsBg from '@styles/_iconsBg.scss';

function CardBig({ imageUrl, alt, title, artist }) {
  return (
    <article className={styles['card-big']}>
      <img
        className={styles['card-big__img']}
        src={imageUrl}
        alt={alt}
        width="510"
        height="400"
        loading="lazy"
      />
      <div className={styles['card-big__box']}>
        <h2 className={`${styles['card-big__title']}`}>{title}</h2>
        <span
          className={`${styles['card-big__artist']} ${iconsBg.iconBg} ${iconsBg['iconBg--avatar-placeholder']}`}
        >
          {artist}
        </span>
      </div>
    </article>
  );
}

export default CardBig;
