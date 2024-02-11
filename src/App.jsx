import Header from './modules/header/Header';
import Hero from './modules/hero/Hero';
import styles from './styles/_app.scss';
import './styles/_fonts.scss';
import './styles/_reset.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Hero />
      </div>
    </>
  );
};

export default App;
