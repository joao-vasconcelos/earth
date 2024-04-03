/* * */

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './GeoBusScreenshots.module.css';
import Container from 'nextjs/componentsNew/Container/Container';
import Section from 'nextjs/componentsNew/Section/Section';
import GeoBusScreenshot1 from '@/assets/geobus/geobus-screenshot-1.png';
import GeoBusScreenshot2 from '@/assets/geobus/geobus-screenshot-2.png';
import GeoBusScreenshot3 from '@/assets/geobus/geobus-screenshot-3.png';

/* * */

export default function GeoBusScreenshots() {
  //

  //
  // A. Setup variables

  const t = useTranslations('GeoBusScreenshots');

  //
  // B. Render components

  return (
    <Container>
      <Section>
        <div className={styles.innerWrapper}>
          <Image className={styles.screenshot} src={GeoBusScreenshot1} alt={t('screenshot_1.alt')} priority />
          <Image className={styles.screenshot} src={GeoBusScreenshot2} alt={t('screenshot_2.alt')} priority />
          <Image className={styles.screenshot} src={GeoBusScreenshot3} alt={t('screenshot_3.alt')} priority />
        </div>
      </Section>
    </Container>
  );

  //
}
