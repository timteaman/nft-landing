import React from 'react';
import Collection from '../../components/collection/Collection';
import styles from './TrendingCollection.module.scss';
import trendingCollectionImg from '../../../public/assets/images/trendingCollection/trendingCollection.json';

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
        <li className={styles['trending-collection__item']}>
          <Collection
            images={[trendingCollectionImg.images.primary1]}
            count="1025+"
            title="DSGN Animals"
            artist="MrFox"
          />
        </li>
        <li className={styles['trending-collection__item']}>
          <Collection
            images={[trendingCollectionImg.images.primary1]}
            count="800+"
            title="Magic Mushrooms"
            artist="Shroomie"
          />
        </li>
        <li className={styles['trending-collection__item']}>
          <Collection
            images={[trendingCollectionImg.images.primary1]}
            count="100+"
            title="Disco Machines"
            artist="BeKind2Robots"
          />
        </li>
      </ul>
    </section>
  );
}

export default TrendingCollection;
