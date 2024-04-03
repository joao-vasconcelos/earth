/* * */

import styles from './MainFooter.module.css';
import MainFooterIntro from 'nextjs/componentsNew/MainFooterIntro/MainFooterIntro';
import MainFooterContacts from 'nextjs/componentsNew/MainFooterContacts/MainFooterContacts';

/* * */

export default function MainFooter() {
  return (
    <footer className={styles.container}>
      <MainFooterIntro />
      <MainFooterContacts />
    </footer>
  );
}
