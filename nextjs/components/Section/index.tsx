/* * */

import styles from './styles.module.css';

/* * */

interface Props {
	children: React.ReactNode
	style?: React.CSSProperties
}

/* * */

export function Section({ children, style }: Props) {
	return (
		<div className={styles.container} style={style}>
			{children}
		</div>
	);
}
