/* * */

import { Link } from 'nextjs/translations/navigation';
import { useTranslations } from 'next-intl';
import styles from './MainHeaderNavigationDesktop.module.css';
import NavigationData from '@/data/Navigation.json';

/* * */

export default function MainHeaderNavigationDesktop() {
  //

  //
  // A. Setup variables

  const navigationDataTranslations = useTranslations('NavigationData');

  //
  // B. Transform data

  const allNavigationLinksDataFormatted = NavigationData.map((item) => ({ ...item, label: navigationDataTranslations(`${item.id}.label`) }));

  //
  // C. Render components

  return (
    <nav className={styles.container}>
      {allNavigationLinksDataFormatted.map((item) => (
        <Link key={item.id} className={styles.navLink} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );

  //
}
