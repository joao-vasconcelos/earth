import { useEffect } from 'react';
import styles from './GeoBus.module.css';

export default function GeoBus() {
  //
  const DOWNLOAD_URL = 'https://apps.apple.com/us/app/geobus/id1510035079';

  useEffect(() => {
    window.location.assign(DOWNLOAD_URL);
  });

  return (
    <div>
      <section className={styles.redirecting}>
        <container>
          <h1>Redirecting to the App Store...</h1>
          <a href={DOWNLOAD_URL}>{"Click here if it doesn't work ›"}</a>
        </container>
      </section>
    </div>
  );
}
