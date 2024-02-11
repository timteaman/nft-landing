import React from 'react';
import Statistics from '../../components/statistics/statistics';
import CardBig from '../../components/cards/CardBig/CardBig';
import styles from './Hero.module.scss';
import image from '../../../public/assets/images/hero/nft-card.webp';

function Hero() {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <div className={styles.hero__inner}>
        <h1 className={styles.hero__title}>
          Discover Digital art & Collect NFTs
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

      <CardBig imageUrl={image} title="Space Walking" artist="Animakid" />
    </section>
  );
}

export default Hero;
