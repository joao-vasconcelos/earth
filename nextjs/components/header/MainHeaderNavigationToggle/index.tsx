/* * */

import { MainHeaderNavigationToggleIconBars } from '@/components/header/MainHeaderNavigationToggleIconBars';
import { MainHeaderNavigationToggleIconX } from '@/components/header/MainHeaderNavigationToggleIconX';

import styles from './styles.module.css';

/* * */

interface Props {
	className?: string
	isOpen?: boolean
	onClick: () => void
}

/* * */

export function MainHeaderNavigationToggle({ className = '', isOpen = false, onClick }: Props) {
	return (
		<div className={`${styles.container} ${className}`} onClick={onClick}>
			{isOpen ? <MainHeaderNavigationToggleIconX /> : <MainHeaderNavigationToggleIconBars />}
		</div>
	);
}
