/* * */

import styles from './GeoBusIntro.module.css';
import Container from 'nextjs/componentsNew/Container/Container';
import Section from 'nextjs/componentsNew/Section/Section';
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
        <h1 className={styles.heading}>{t('heading')}</h1>
      </Section>
    </Container>
  );

  //
}
