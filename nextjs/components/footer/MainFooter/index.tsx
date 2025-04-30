/* * */

import { MainFooterContacts } from '@/components/footer/MainFooterContacts';
import { MainFooterIntro } from '@/components/footer/MainFooterIntro';

import styles from './styles.module.css';

/* * */

export function MainFooter() {
	return (
		<footer className={styles.container}>
			<MainFooterIntro />
			<MainFooterContacts />
		</footer>
	);
}
