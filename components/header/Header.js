import Link from 'next/link';
import styles from './Header.module.css';
import randomColor from '../../services/randomColor';
import { useEffect, useState } from 'react';

export default function Header() {
  //
  const [logoColor, setLogoColor] = useState();
  useEffect(() => setLogoColor(randomColor()), []);

  return (
    <header className={styles.container}>
      <container>
        <div className={styles.logo}>
          <Link href='/'>
            <a style={{ color: logoColor }}>joão.earth</a>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <Link href='/geobus'>
            <a>GeoBus</a>
          </Link>
          <Link href='/infrastructure'>
            <a>Infrastructure</a>
          </Link>
        </nav>
      </container>
    </header>
  );
}
