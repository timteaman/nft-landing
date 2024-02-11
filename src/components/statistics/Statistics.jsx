import React from 'react';
import styles from './Statistics.module.scss';
import '../../styles/_fonts.scss';

function Statistics(props) {
  const { count, text } = props;
  return (
    <div className={styles.statistics}>
      <h6>adsadadsdasdsadsadsa</h6>
      <span className={styles.statistics__count}>{count}</span>
      <span className={styles.statistics__text}>{text}</span>
    </div>
  );
}

export default Statistics;
