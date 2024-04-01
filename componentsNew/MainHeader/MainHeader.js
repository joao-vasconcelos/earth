/* * */

import { Link } from '@/translations/navigation';
import { useTranslations } from 'next-intl';
import styles from './MainHeader.module.css';
import randomColor from '@/services/randomColor';

/* * */

export default function MainHeader() {
  //

  //
  // A. Setup variables

  const logoColor = randomColor();
  const t = useTranslations('MainHeader');

  const links = [
    { href: 'geobus', label: t('geobus') },
    { href: 'infrastructure', label: t('infrastructure') },
    { href: 'work', label: t('work') },
    { href: 'me', label: t('me') },
  ];

  //
  // B. Render components

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" style={{ color: logoColor }}>
            joão.earth
          </a>
        </div>
        <div className={`${styles.navigation} ${styles.navigationDesktop}`}>
          {links.map((item, index) => (
            <Link key={index} href={`/${item.href}`}>
              {item.label}
            </Link>
          ))}
        </div>
        {/* <div className={styles.toggle} onClick={handleClick}>
          {isOpen ? <IconX /> : <IconHamburger />}
        </div> */}
      </div>
      {/* {isOpen && (
        <div className={`${styles.navigation} ${styles.navigationMobile}`}>
          {links.map((page, index) => (
            <Link key={index} href={`/${page.path}`} onClick={() => setIsOpen(false)}>
              {page.title}
            </Link>
          ))}
        </div>
      )} */}
    </div>
  );

  //
}
