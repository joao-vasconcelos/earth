/* * */

import styles from './MainWrapper.module.css';
import MainHeader from 'nextjs/componentsNew/MainHeader/MainHeader';
import MainFooter from 'nextjs/componentsNew/MainFooter/MainFooter';

/* * */

export default function MainWrapper({ children }) {
  return (
    <div className={styles.container}>
      <MainHeader />
      <div className={styles.content}>{children}</div>
      {/* <div className={styles.content}>siudjoskm</div> */}
      <MainFooter />
    </div>
  );
}
