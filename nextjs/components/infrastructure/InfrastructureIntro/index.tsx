/* * */

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function InfrastructureIntro() {
	//

	//
	// A. Setup variables

	const t = useTranslations('InfrastructureIntro');

	//
	// B. Render components

	return (
		<Container className={styles.container}>
			<Section>
				<h1 className={styles.heading}>{t('heading')}</h1>
				<p className={styles.paragraph}>{t('paragraph_1')}</p>
				<p className={styles.paragraph}>{t('paragraph_2')}</p>
				<p className={styles.paragraph}>{t('paragraph_3')}</p>
				<p className={styles.paragraph}>
					{t.rich('paragraph_4', {
						anchor_1: chunks => (
							<a href="https://bicycledutch.wordpress.com" target="_blank">
								{chunks}
							</a>
						),
						anchor_2: chunks => (
							<a href="https://www.youtube.com/channel/UC67YlPrRvsO117gFDM7UePg" target="_blank">
								{chunks}
							</a>
						),
					})}
				</p>
			</Section>
		</Container>
	);

	//
}
