/* * */

import ProfilePic from '@/assets/me/joao.jpg';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './styles.module.css';

/* * */

export function AboutMeIntro() {
	//

	//
	// A. Setup variables

	const t = useTranslations('AboutMeIntro');

	//
	// B. Render components

	return (
		<Container className={styles.container}>
			<Section>
				<div className={styles.innerWrapper}>
					<Image alt={t('profile_pic.alt')} className={styles.profilePic} src={ProfilePic} priority />
					<div className={styles.headingsWrapper}>
						<h1 className={styles.heading}>{t('heading')}</h1>
						<h2 className={styles.subheading}>{t('subheading')}</h2>
					</div>
				</div>
			</Section>
		</Container>
	);

	//
}
