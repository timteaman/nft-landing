import React from 'react';
import styles from './styles.module.scss';

function Collection({
  primaryImage,
  secondaryImages,
  alt,
  count,
  title,
  artist,
}) {
  return (
    <div className={styles.collection}>
      <img
        className={styles['collection__main-img']}
        src={primaryImage}
        alt={alt}
        width="330"
        height="330"
        loading="lazy"
      />
      <div className={styles.collection__inner}>
        {secondaryImages.map((image, index) => (
          <img
            key={index}
            className={styles['collection__img']}
            src={image}
            alt={`${alt} ${index + 1}`}
            width="100"
            height="100"
            loading="lazy"
          />
        ))}
        <span className={styles['collection__count']}>{count}</span>
      </div>
      <span className={`${styles['collection__title']}`}>{title}</span>
      <span className={`${styles['collection__artist']}`}>{artist}</span>
    </div>
  );
}

export default React.memo(Collection);
