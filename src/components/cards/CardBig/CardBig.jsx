import React from 'react';
import styles from './CardBig.module.scss';

function CardBig({ imageUrl, title, artist }) {
  return (
    <article className={styles['card-big']}>
      <img
        className={styles['card-big__img']}
        src={imageUrl}
        alt={title}
        width="510"
        height="400"
      />
      <div className={styles['card-big__box']}>
        <h2 className={`${styles['card-big__title']}`}>{title}</h2>
        <span className={styles['card-big__artist']}>{artist}</span>
      </div>
    </article>
  );
}

export default CardBig;
