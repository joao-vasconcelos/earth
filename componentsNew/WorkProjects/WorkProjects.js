/* * */

import { useTranslations } from 'next-intl';
import styles from './WorkProjects.module.css';
import WorkProjectsData from '@/data/WorkProjects.json';
import WorkProjectsProjectButton from '@/components/WorkProjectsProjectButton/WorkProjectsProjectButton';

/* * */

export default function WorkProjects() {
  //

  //
  // A. Setup variables

  const t = useTranslations('WorkProjects');

  //
  // B. Transform data

  const allWorkProjectsData = Object.values(WorkProjectsData);

  //
  // B. Render components

  return <div className={styles.innerWrapper}>{allWorkProjectsData.length > 0 ? allWorkProjectsData.map((item) => <WorkProjectsProjectButton key={item.id} projectData={item} />) : <p className={styles.noDataLabel}>{t('no_data')}</p>}</div>;

  //
}
