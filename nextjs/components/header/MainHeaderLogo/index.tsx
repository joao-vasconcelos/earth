/* * */

import Link from 'next/link';

import styles from './styles.module.css';

/* * */

export function MainHeaderLogo() {
	return (
		<Link className={styles.logo} href="/">
			joao.earth
		</Link>
	);
}
