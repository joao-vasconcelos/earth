'use client';

/* * */

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from 'nextjs/translations/navigation';
import styles from './MainHeaderNavigationMobile.module.css';
import NavigationData from '@/data/Navigation.json';
import MainHeaderNavigationToggle from 'nextjs/componentsNew/MainHeaderNavigationToggle/MainHeaderNavigationToggle';

/* * */

export default function MainHeaderNavigationMobile() {
  //

  //
  // A. Setup variables

  const [isOpen, setIsOpen] = useState(false);
  const navigationDataTranslations = useTranslations('NavigationData');

  //
  // B. Transform data

  const allNavigationLinksDataFormatted = NavigationData.map((item) => ({ ...item, label: navigationDataTranslations(`${item.id}.label`) }));

  //
  // C. Handle actions

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  //
  // D. Render components

  return (
    <div className={styles.container}>
      <MainHeaderNavigationToggle isOpen={isOpen} onClick={handleToggle} />
      {isOpen && (
        <div className={styles.navWrapper}>
          <MainHeaderNavigationToggle className={styles.toggleWhenOpen} isOpen={isOpen} onClick={handleToggle} />
          {allNavigationLinksDataFormatted.map((item) => (
            <Link key={item.id} className={styles.navLink} href={item.href} onClick={handleToggle}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  //
}
