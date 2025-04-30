/* * */

import GeoBusAppIcon from '@/assets/geobus/geobus-icon.png';
import { Container } from '@/components/Container';
import { GeoBusPresentationBadgeInactive } from '@/components/geobus/GeoBusPresentationBadgeInactive';
import { Section } from '@/components/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './styles.module.css';

/* * */

export function GeoBusPresentation() {
	//

	//
	// A. Setup variables

	const t = useTranslations('GeoBusPresentation');

	//
	// B. Render components

	return (
		<Container>
			<Section>
				<div className={styles.innerWrapper}>
					<Image alt={t('app_icon.alt')} className={styles.geoBusIcon} src={GeoBusAppIcon} priority />
					<div className={styles.summaryWrapper}>
						<h2 className={styles.title}>{t('title')}</h2>
						<p className={styles.subtitle}>{t('subtitle')}</p>
						<div className={styles.badgesWrapper}>
							<GeoBusPresentationBadgeInactive />
						</div>
					</div>
				</div>
			</Section>
		</Container>
	);

	//
}
