/* * */

import MainFooter from '@/components/MainFooter/MainFooter';
import { MainHeader } from '@/components/header/MainHeader';

import styles from './styles.module.css';

/* * */

export function MainWrapper({ children }) {
	return (
		<div className={styles.container}>
			<MainHeader />
			<div className={styles.content}>{children}</div>
			{/* <div className={styles.content}>siudjoskm</div> */}
			<MainFooter />
		</div>
	);
}
