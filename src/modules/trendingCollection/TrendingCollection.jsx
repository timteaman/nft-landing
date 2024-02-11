import React from 'react';
import Collection from '../../components/collection/Collection';
import styles from './TrendingCollection.module.scss';

function TrendingCollection() {
  return (
    <section>
      <div>
        <h2>Trending Collection</h2>
        <p>Checkout our weekly updated trending collection.</p>
      </div>

      <div className={styles['trending-collection']}>
        <Collection
          images=""
          count="1025+"
          title="DSGN Animals"
          artist="MrFox"
        />
        <Collection
          images=""
          count="800+"
          title="Magic Mushrooms"
          artist="Shroomie"
        />
        <Collection
          images=""
          count="100+"
          title="Disco Machines"
          artist="BeKind2Robots"
        />
      </div>
    </section>
  );
}

export default TrendingCollection;
