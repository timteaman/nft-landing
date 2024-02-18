import React from 'react';
import styles from './styles.module.scss';
import '@styles/_fonts.scss';

function Statistics({ count, text }) {
  return (
    <div className={styles.statistics}>
      <span className={styles.statistics__count}>{count}</span>
      <span className={styles.statistics__text}>{text}</span>
    </div>
  );
}

export default Statistics;
