import React from 'react';
import styles from './hero.module.scss';
import Statistics from '../../components/statistics/statistics';

function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.hero__inner}>
        <h1 className={styles.hero__title}>
          Discover digital art & Collect NFTs
        </h1>
        <p className={styles.hero__subtitle}>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>

        <div className={styles.hero__wrapper}>
          <Statistics count="240k&#43;" text="Total Sale" />
          <Statistics count="100k&#43;" text="Auctions" />
          <Statistics count="220k&#43;" text="Artists" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
