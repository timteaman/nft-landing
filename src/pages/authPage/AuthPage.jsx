import Header from '@modules/header/Header';
import styles from './styles.module.scss';

function AuthPage() {
  return (
    <>
      <Header />
      <p className={styles.text}>Auth Page</p>
    </>
  );
}

export default AuthPage;
