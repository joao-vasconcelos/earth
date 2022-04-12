import Image from 'next/image';
import styles from './GeoBus.module.css';

export default function GeoBus() {
  return (
    <main>
      <section className={styles.initialBanner}>
        <h1>Public Transit should be easier.</h1>
      </section>
    </main>
  );
}
