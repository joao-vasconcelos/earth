/* * */

import { IconMenu2, IconX } from '@tabler/icons-react';

import styles from './styles.module.css';

/* * */

interface Props {
	isOpen?: boolean
	onClick: () => void
}

/* * */

export function MainHeaderNavigationToggle({ isOpen = false, onClick }: Props) {
	return (
		<div className={styles.container} onClick={onClick}>
			{isOpen ? <IconX /> : <IconMenu2 />}
		</div>
	);
}
