/* * */

import Image from 'next/image';
import styles from './AboutMeIntro.module.css';
import Container from 'nextjs/componentsNew/Container/Container';
import Section from 'nextjs/componentsNew/Section/Section';
import ProfilePic from '@/assets/me/joao.jpg';
import { useTranslations } from 'next-intl';

/* * */

export default function AboutMeIntro() {
  //

  //
  // A. Setup variables

  const t = useTranslations('AboutMeIntro');

  //
  // B. Render components

  return (
    <Container className={styles.container}>
      <Section>
        <div className={styles.innerWrapper}>
          <Image className={styles.profilePic} src={ProfilePic} alt={t('profile_pic.alt')} priority />
          <div className={styles.headingsWrapper}>
            <h1 className={styles.heading}>{t('heading')}</h1>
            <h2 className={styles.subheading}>{t('subheading')}</h2>
          </div>
        </div>
      </Section>
    </Container>
  );

  //
}
