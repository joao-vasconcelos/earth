/* * */

import styles from './styles.module.css';

/* * */

interface Props {
	children: React.ReactNode
	paddingBottom?: boolean
	paddingTop?: boolean
	style?: React.CSSProperties
}

/* * */

export function Section({ children, paddingBottom, paddingTop, style }: Props) {
	return (
		<div className={styles.container} data-padding-bottom={paddingBottom} data-padding-top={paddingTop} style={style}>
			{children}
		</div>
	);
}
