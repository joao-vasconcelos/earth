/* * */

import GeoBusScreenshot1 from '@/assets/geobus/geobus-screenshot-1.png';
import GeoBusScreenshot2 from '@/assets/geobus/geobus-screenshot-2.png';
import GeoBusScreenshot3 from '@/assets/geobus/geobus-screenshot-3.png';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './styles.module.css';

/* * */

export function GeoBusScreenshots() {
	//

	//
	// A. Setup variables

	const t = useTranslations('GeoBusScreenshots');

	//
	// B. Render components

	return (
		<Container>
			<Section>
				<div className={styles.innerWrapper}>
					<Image alt={t('screenshot_1.alt')} className={styles.screenshot} src={GeoBusScreenshot1} priority />
					<Image alt={t('screenshot_2.alt')} className={styles.screenshot} src={GeoBusScreenshot2} priority />
					<Image alt={t('screenshot_3.alt')} className={styles.screenshot} src={GeoBusScreenshot3} priority />
				</div>
			</Section>
		</Container>
	);

	//
}
