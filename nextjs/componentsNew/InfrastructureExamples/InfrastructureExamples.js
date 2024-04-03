/* * */

import { useTranslations } from 'next-intl';
import styles from './InfrastructureExamples.module.css';
import Container from 'nextjs/componentsNew/Container/Container';
import Section from 'nextjs/componentsNew/Section/Section';
import YoutubeEmbed from 'nextjs/componentsNew/YoutubeEmbed/YoutubeEmbed';

/* * */

export default function InfrastructureExamples() {
  //

  //
  // A. Setup variables

  const t = useTranslations('InfrastructureExamples');

  //
  // B. Render components

  return (
    <Container>
      <Section>
        <YoutubeEmbed embedId="FlApbxLz6pA" />
        <h1 className={styles.title}>{t('example_1.title')}</h1>
        <p className={styles.description}>{t('example_1.description')}</p>
        <p className={styles.author}>{t('example_1.author')}</p>
        <a className={styles.link} href="https://bicycledutch.wordpress.com" target="_blank">
          {t('example_1.link')}
        </a>
      </Section>
      <Section>
        <YoutubeEmbed embedId="-GcocOUVRa4" />
        <h1 className={styles.title}>{t('example_2.title')}</h1>
        <p className={styles.description}>{t('example_2.description')}</p>
        <p className={styles.author}>{t('example_2.author')}</p>
        <a className={styles.link} href="https://bicycledutch.wordpress.com" target="_blank">
          {t('example_2.link')}
        </a>
      </Section>
      <Section>
        <YoutubeEmbed embedId="XpQMgbDJPok" />
        <h1 className={styles.title}>{t('example_3.title')}</h1>
        <p className={styles.description}>{t('example_3.description')}</p>
        <p className={styles.author}>{t('example_3.author')}</p>
        <a className={styles.link} href="https://bicycledutch.wordpress.com" target="_blank">
          {t('example_3.link')}
        </a>
      </Section>
    </Container>
  );

  //
}
