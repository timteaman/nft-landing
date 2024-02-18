import React from 'react';
import Collection from '@components/collection/Collection';
import styles from './styles.module.scss';
import collectionData from './collectionsData.json';

function TrendingCollection() {
  return (
    <section className={styles['trending-collection']}>
      <div className={styles['trending-collection__inner']}>
        <h2 className={styles['trending-collection__title']}>
          Trending Collection
        </h2>
        <p className={styles['trending-collection__subtitle']}>
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <ul className={styles['trending-collection__list']}>
        {collectionData.map((item) => (
          <li
            className={styles['trending-collection__item']}
            key={item.id || item.title}
          >
            <Collection {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TrendingCollection;
