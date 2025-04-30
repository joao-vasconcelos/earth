/* * */

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function GeoBusIntro() {
	//

	//
	// A. Setup variables

	const t = useTranslations('GeoBusIntro');

	//
	// B. Render components

	return (
		<Container className={styles.container}>
			<Section>
				<h1 className={styles.heading}>{t('heading')}</h1>
			</Section>
		</Container>
	);

	//
}
