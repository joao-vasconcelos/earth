/* * */

import styles from './MainFooter.module.css';
import MainFooterIntro from '@/components/MainFooterIntro/MainFooterIntro';
import MainFooterContacts from '@/components/MainFooterContacts/MainFooterContacts';

/* * */

export default function MainFooter() {
  return (
    <footer className={styles.container}>
      <MainFooterIntro />
      <MainFooterContacts />
    </footer>
  );
}
