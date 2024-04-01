/* * */

import Image from 'next/image';
import styles from './AboutMeDescription.module.css';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import { useTranslations } from 'next-intl';
import LinkedinLogoLight from '@/assets/me/linkedin-light.svg';
import LinkedinLogoDark from '@/assets/me/linkedin-dark.svg';

/* * */

export default function AboutMeDescription() {
  //

  //
  // A. Setup variables

  const t = useTranslations('AboutMeDescription');

  //
  // B. Render components

  return (
    <Container>
      <Section>
        <div className={styles.innerWrapper}>
          <p className={styles.punchLine}>{t('punch_line')}</p>
          <p className={styles.text}>{t('text')}</p>
          <a className={styles.linkedin} href="https://www.linkedin.com/in/johnyvasconcelos/" target="_blank" rel="noreferrer">
            <theme-light>
              <Image src={LinkedinLogoLight} alt={t('linkedin_logo.alt')} />
            </theme-light>
            <theme-dark>
              <Image src={LinkedinLogoDark} alt={t('linkedin_logo.alt')} />
            </theme-dark>
          </a>
        </div>
      </Section>
    </Container>
  );

  //
}
