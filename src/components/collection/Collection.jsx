import React from 'react';
import styles from './Collection.module.scss';

function Collection(props) {
  const { images, count, title, artist } = props;
  return (
    <div className={styles.collestion}>
      <img className="" src={images} alt="" width="330" height="330" />
      <div className={styles.collection__inner}>
        <img src={images} alt="" width="100" height="100" />
        <img src={images} alt="" width="100" height="100" />
        <span>{count}</span>
      </div>
      <span>{title}</span>
      <span>{artist}</span>
    </div>
  );
}

export default Collection;
