import Header from '@modules/header/Header';
import Hero from '@modules/hero/Hero';
import TrendingCollection from '@modules/trendingCollection/TrendingCollection';
import styles from './styles.module.scss';

function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Hero />
        <TrendingCollection />
      </div>
    </>
  );
}

export default HomePage;
