import React from 'react';
import styles from './Collection.module.scss';

function Collection(props) {
  const { images, count, title, artist } = props;
  return (
    <div className={styles.collection}>
      <img
        className={`${styles['collection__main-img']}`}
        src={images}
        alt=""
        width="330"
        height="330"
      />
      <div className={styles.collection__inner}>
        <img
          className={`${styles['collection__img']}`}
          src={images}
          alt=""
          width="100"
          height="100"
        />
        <img
          className={`${styles['collection__img']}`}
          src={images}
          alt=""
          width="100"
          height="100"
        />
        <span className={`${styles['collection__count']}`}>{count}</span>
      </div>
      <span className={`${styles['collection__title']}`}>{title}</span>
      <span className={`${styles['collection__artist']}`}>{artist}</span>
    </div>
  );
}

export default Collection;
