/* * */

import { Container } from '@/components/Container';
import { MainHeaderLogo } from '@/components/header/MainHeaderLogo';
import { MainHeaderNavigationDesktop } from '@/components/header/MainHeaderNavigationDesktop';
import { MainHeaderNavigationMobile } from '@/components/header/MainHeaderNavigationMobile';

import styles from './styles.module.css';

/* * */

export function MainHeader() {
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
