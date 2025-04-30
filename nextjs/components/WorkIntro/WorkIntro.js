/* * */

import { useTranslations } from 'next-intl';
import styles from './WorkIntro.module.css';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

/* * */

export default function WorkIntro() {
  //

  //
  // A. Setup variables

  const t = useTranslations('WorkIntro');

  //
  // B. Render components

  return (
    <Container className={styles.container}>
      <Section>
        <h1 className={styles.heading}>{t('heading')}</h1>
        <h3 className={styles.subheading}>{t('subheading')}</h3>
        <p className={styles.paragraph}>{t('paragraph')}</p>
      </Section>
    </Container>
  );

  //
}
