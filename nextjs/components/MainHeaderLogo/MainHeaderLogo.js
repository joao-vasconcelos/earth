/* * */

import { useTranslations } from 'next-intl';
import styles from './MainHeaderLogo.module.css';
import randomColor from 'services/randomColor';

/* * */

export default function MainHeaderLogo() {
  //

  //
  // A. Setup variables

  const logoColor = randomColor();
  const t = useTranslations('MainHeaderLogo');

  //
  // B. Render components

  return (
    <a href="/" className={styles.container} style={{ color: logoColor }}>
      {t('website_title')}
    </a>
  );

  //
}
