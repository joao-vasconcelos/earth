/* * */

import styles from './GeoBusIntro.module.css';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import { useTranslations } from 'next-intl';

/* * */

export default function GeoBusIntro() {
  //

  //
  // A. Setup variables

  const t = useTranslations('GeoBusIntro');

  //
  // B. Render components

  return (
    <Container className={styles.container}>
      <Section>
        <div className={styles.innerWrapper}>
          <h1 className={styles.heading}>{t('heading')}</h1>
        </div>
      </Section>
    </Container>
  );

  //
}
