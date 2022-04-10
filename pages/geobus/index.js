import Image from 'next/image';
import styles from '../../styles/GeoBus.module.css';

export default function GeoBus() {
  return (
    <div>
      <div className={styles.initialBanner}>
        <h1>Public Transit should be easier.</h1>
      </div>
    </div>
  );
}
