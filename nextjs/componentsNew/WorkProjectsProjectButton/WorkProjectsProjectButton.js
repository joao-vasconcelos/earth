/* * */

import { useTranslations } from 'next-intl';
import { Link } from 'nextjs/translations/navigation';
import Container from 'nextjs/componentsNew/Container/Container';
import WorkProjectsProjectTag from 'nextjs/componentsNew/WorkProjectsProjectTag/WorkProjectsProjectTag';
import styles from './WorkProjectsProjectButton.module.css';

/* * */

export default function WorkProjectsProjectButton({ projectData }) {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData');

  //
  // B. Render components

  return (
    <Link className={styles.container} style={{ '--accent-color': projectData.accent_color, '--accent-text-color': projectData.accent_text_color }} href={`/work/${projectData.id}`}>
      <Container>
        <div className={styles.infoWrapper}>
          <h3 className={styles.title}>{workProjectsDataTranslations(`${projectData.id}.title`)}</h3>
          {projectData.tags.length > 0 && (
            <div className={styles.tagsList}>
              {projectData.tags.map((item) => (
                <WorkProjectsProjectTag key={item} tagId={item} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Link>
  );

  //
}
