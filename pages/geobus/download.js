import { useEffect } from 'react';
import styles from './GeoBus.module.css';

export default function GeoBus() {
  useEffect(() => {
    window.location.assign('https://apps.apple.com/us/app/geobus/id1510035079');
  });

  return (
    <div>
      <section className={styles.redirecting}>
        <container>
          <h1>Redirecting to the App Store...</h1>
        </container>
      </section>
    </div>
  );
}
