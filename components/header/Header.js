import Link from 'next/link';
import styles from './Header.module.css';
import randomColor from '../../services/randomColor';
import { useEffect, useState } from 'react';
import IconPerson from '../icons/IconPerson';

export default function Header() {
  //
  const [logoColor, setLogoColor] = useState();
  useEffect(() => setLogoColor(randomColor()), []);

  return (
    <header className={styles.header}>
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
          <Link href='/work'>
            <a>Work</a>
          </Link>
        </nav>
        <div className={styles.right}>
          <Link href='/me'>
            <a>
              <IconPerson />
            </a>
          </Link>
        </div>
      </container>
    </header>
  );
}
