import React from 'react';
import Statistics from '@components/statistics/statistics';
import CardBig from '@shared/cards/CardBig/CardBig';
import styles from './Hero.module.scss';
import image from '@assets/images/hero/nft-card.webp';
import Button from '@shared/Button/Button';

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

        <Button buttonText="Get Started" />

        <div className={styles.hero__wrapper}>
          <Statistics count="240k&#43;" text="Total Sale" />
          <Statistics count="100k&#43;" text="Auctions" />
          <Statistics count="220k&#43;" text="Artists" />
        </div>
      </div>

      <CardBig
        imageSrc={image}
        title="Space Walking"
        artist="Animakid"
        width="510"
        height="400"
        alt="astronaut on the moon"
      />
    </section>
  );
}

export default Hero;
