/* * */

import Container from '../Container/Container';
import styles from './MainHeader.module.css';
import MainHeaderLogo from 'nextjs/componentsNew/MainHeaderLogo/MainHeaderLogo';
import MainHeaderNavigationDesktop from 'nextjs/componentsNew/MainHeaderNavigationDesktop/MainHeaderNavigationDesktop';
import MainHeaderNavigationMobile from 'nextjs/componentsNew/MainHeaderNavigationMobile/MainHeaderNavigationMobile';

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
