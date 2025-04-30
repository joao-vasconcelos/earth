/* * */

import { useTranslations } from 'next-intl';
import randomColor from 'services/randomColor';

import styles from './styles.module.css';

/* * */

export function MainHeaderLogo() {
	//

	//
	// A. Setup variables

	const logoColor = randomColor();
	const t = useTranslations('MainHeaderLogo');

	//
	// B. Render components

	return (
		<a className={styles.container} href="/" style={{ color: logoColor }}>
			{t('website_title')}
		</a>
	);

	//
}
