/* * */

import LinkedinLogoDark from '@/assets/me/linkedin-dark.svg';
import LinkedinLogoLight from '@/assets/me/linkedin-light.svg';
import { Container } from '@/components/Container';
import { ThemeSwitch } from '@/components/responsive/ThemeSwitch';
import { Section } from '@/components/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './styles.module.css';

/* * */

export function AboutMeDescription() {
	//

	//
	// A. Setup variables

	const t = useTranslations('AboutMeDescription');

	//
	// B. Render components

	return (
		<Container>
			<Section paddingTop>
				<div className={styles.innerWrapper}>
					<p className={styles.punchLine}>{t('punch_line')}</p>
					<p className={styles.text}>{t('text')}</p>
					<a className={styles.linkedin} href="https://www.linkedin.com/in/johnyvasconcelos/" rel="noreferrer" target="_blank">
						<ThemeSwitch
							dark={<Image alt={t('linkedin_logo.alt')} src={LinkedinLogoDark} />}
							light={<Image alt={t('linkedin_logo.alt')} src={LinkedinLogoLight} />}
						/>
					</a>
				</div>
			</Section>
		</Container>
	);

	//
}
