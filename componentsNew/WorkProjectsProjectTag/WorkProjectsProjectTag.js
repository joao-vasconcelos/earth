/* * */

import { useTranslations } from 'next-intl';
import styles from './WorkProjectsProjectTag.module.css';

/* * */

export default function WorkProjectsProjectTag({ tagId }) {
  //

  //
  // A. Setup variables

  const t = useTranslations('WorkProjectsProjectTag');

  //
  // B. Render components

  return <div className={styles.container}>{t(`${tagId}.label`)}</div>;

  //
}
