import Header from './modules/header/Header';
import Hero from './modules/hero/Hero';
import TrendingCollection from './modules/trendingCollection/TrendingCollection';
import styles from './styles/_app.scss';
import './styles/_fonts.scss';
import './styles/_reset.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Hero />
        <TrendingCollection />
      </div>
    </>
  );
};

export default App;
