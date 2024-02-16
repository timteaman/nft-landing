import React from 'react';
import Collection from '@components/collection/Collection';
import styles from './TrendingCollection.module.scss';
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
        {collectionData.map((item, index) => (
          <li className={styles['trending-collection__item']} key={index}>
            <Collection {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TrendingCollection;
