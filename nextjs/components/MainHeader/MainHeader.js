/* * */

import Container from '../Container/Container';
import styles from './MainHeader.module.css';
import MainHeaderLogo from '@/components/MainHeaderLogo/MainHeaderLogo';
import MainHeaderNavigationDesktop from '@/components/MainHeaderNavigationDesktop/MainHeaderNavigationDesktop';
import MainHeaderNavigationMobile from '@/components/MainHeaderNavigationMobile/MainHeaderNavigationMobile';

/* * */

export default function MainHeader() {
  return (
    <>
      <Container className={styles.container}>
        <div className={styles.innerWrapper}>
          <MainHeaderLogo />
          <MainHeaderNavigationDesktop />
          <MainHeaderNavigationMobile />
        </div>
      </Container>
    </>
  );
}
