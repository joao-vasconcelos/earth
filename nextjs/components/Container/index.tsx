/* * */

import styles from './styles.module.css';

/* * */

interface Props {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

/* * */

export function Container({ children, className = '', style = {} }: Props) {
	return (
		<div className={className} style={style}>
			<div className={styles.innerWrapper}>{children}</div>
		</div>
	);
}
