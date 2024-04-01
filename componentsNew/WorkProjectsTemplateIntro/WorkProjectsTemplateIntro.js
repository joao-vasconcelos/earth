/* * */

import { useTranslations } from 'next-intl';
import styles from './WorkProjectsTemplateIntro.module.css';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import WorkProjectsProjectTag from '@/components/WorkProjectsProjectTag/WorkProjectsProjectTag';

/* * */

export default function WorkProjectsTemplateIntro({ projectData }) {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData');

  //
  // B. Render components

  return (
    <Container className={styles.container}>
      <Section>
        <div className={styles.innerWrapper}>
          <h1 className={styles.title}>{workProjectsDataTranslations(`${projectData.id}.title`)}</h1>
          {projectData.tags.length > 0 && (
            <div className={styles.tagsList}>
              {projectData.tags.map((item) => (
                <WorkProjectsProjectTag key={item} tagId={item} />
              ))}
            </div>
          )}
          <p className={styles.description}>{workProjectsDataTranslations(`${projectData.id}.description`)}</p>
        </div>
      </Section>
    </Container>
  );

  //
}
