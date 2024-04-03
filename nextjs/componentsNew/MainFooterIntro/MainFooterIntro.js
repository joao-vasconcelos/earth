/* * */

import { useTranslations } from 'next-intl';
import styles from './MainFooterIntro.module.css';
import Container from 'nextjs/componentsNew/Container/Container';

/* * */

export default function MainFooterIntro() {
  //

  //
  // A. Setup variables

  const t = useTranslations('MainFooterIntro');

  //
  // B. Render components

  return (
    <Container>
      <h2 className={styles.heading}>{t('heading')}</h2>
      <p className={styles.subheading}>{t('subheading_1')}</p>
      <p className={styles.subheading}>{t('subheading_2')}</p>
    </Container>
  );

  //
}
