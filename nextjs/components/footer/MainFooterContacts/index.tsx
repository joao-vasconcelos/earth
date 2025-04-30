/* * */

import { Container } from '@/components/Container';
import { MainFooterContactsIconCode } from '@/components/footer/MainFooterContactsIconCode';
import { MainFooterContactsIconEmail } from '@/components/footer/MainFooterContactsIconEmail';
import { MainFooterContactsIconSocial } from '@/components/footer/MainFooterContactsIconSocial';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function MainFooterContacts() {
	//

	//
	// A. Setup variables

	const t = useTranslations('MainFooterContacts');

	//
	// B. Render components

	return (
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.contact}>
					<MainFooterContactsIconEmail />
					<p className={styles.contactTitle}>{t('email.title')}</p>
					<p className={styles.contactMessage}>
						{t.rich('email.message', {
							anchor: chunks => (
								<a href="mailto:contact@joao.earth" target="_blank">
									{chunks}
								</a>
							),
						})}
					</p>
					<p className={styles.contactDisclaimer}>{t('email.disclaimer')}</p>
				</div>
				<div className={styles.contact}>
					<MainFooterContactsIconCode />
					<p className={styles.contactTitle}>{t('code.title')}</p>
					<p className={styles.contactMessage}>
						{t.rich('code.message', {
							anchor: chunks => (
								<a href="https://github.com/joao-vasconcelos" target="_blank">
									{chunks}
								</a>
							),
						})}
					</p>
					<p className={styles.contactDisclaimer}>{t('code.disclaimer')}</p>
				</div>
				<div className={styles.contact}>
					<MainFooterContactsIconSocial />
					<p className={styles.contactTitle}>{t('social.title')}</p>
					<p className={styles.contactMessage}>
						{t.rich('social.message', {
							anchor: chunks => (
								<a href="https://discordapp.com/users/johnyvasconcelos" target="_blank">
									{chunks}
								</a>
							),
						})}
					</p>
					<p className={styles.contactDisclaimer}>{t('social.disclaimer')}</p>
				</div>
			</div>
		</Container>
	);

	//
}
