import { useEffect } from 'react';
import styles from '../../styles/GeoBus.module.css';

export default function GeoBus() {
  useEffect(() => {
    window.location.assign('https://apps.apple.com/us/app/geobus/id1510035079');
  });

  return (
    <div>
      <div className={styles.redirecting}>
        <h1>Redirecting to the App Store...</h1>
      </div>
    </div>
  );
}
