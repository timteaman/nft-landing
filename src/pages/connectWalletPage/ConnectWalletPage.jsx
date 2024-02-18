import Header from '@modules/header/Header';
import styles from './styles.module.scss';

function ConnectWalletPage() {
  return (
    <>
      <Header />
      <p className={styles.text}>Connect a wallet</p>
    </>
  );
}

export default ConnectWalletPage;
