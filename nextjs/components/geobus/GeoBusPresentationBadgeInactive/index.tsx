/* * */

import { IconMoodSad } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function GeoBusPresentationBadgeInactive() {
	//

	//
	// A. Setup variables

	const t = useTranslations('GeoBusPresentationBadgeInactive');

	//
	// B. Render components

	return (
		<div className={styles.container}>
			<IconMoodSad size={18} stroke={2} />
			<span className={styles.label}>{t('label')}</span>
		</div>
	);

	//
}
