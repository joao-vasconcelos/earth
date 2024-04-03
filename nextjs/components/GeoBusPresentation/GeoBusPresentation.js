/* * */

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './GeoBusPresentation.module.css';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import GeoBusPresentationBadgeInactive from '@/components/GeoBusPresentationBadgeInactive/GeoBusPresentationBadgeInactive';
import GeoBusAppIcon from '@/assets/geobus/geobus-icon.png';

/* * */

export default function GeoBusPresentation() {
  //

  //
  // A. Setup variables

  const t = useTranslations('GeoBusPresentation');

  //
  // B. Render components

  return (
    <Container>
      <Section>
        <div className={styles.innerWrapper}>
          <Image className={styles.geoBusIcon} src={GeoBusAppIcon} alt={t('app_icon.alt')} priority />
          <div className={styles.summaryWrapper}>
            <h2 className={styles.title}>{t('title')}</h2>
            <p className={styles.subtitle}>{t('subtitle')}</p>
            <div className={styles.badgesWrapper}>
              <GeoBusPresentationBadgeInactive />
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );

  //
}
