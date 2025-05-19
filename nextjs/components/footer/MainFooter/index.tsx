/* * */

import { Container } from '@/components/Container';
import { MainFooterContacts } from '@/components/footer/MainFooterContacts';

import styles from './styles.module.css';

/* * */

export function MainFooter() {
	return (
		<footer className={styles.container}>
			<Container>
				<div className={styles.columns}>
					<MainFooterContacts />
				</div>
			</Container>
		</footer>
	);
}
