/* * */

import { IconBrandBluesky, IconBrandGithub, IconMail } from '@tabler/icons-react';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

const CONTACTS = [
	{ _id: 'github', href: 'https://github.com/joao-vasconcelos', icon: <IconBrandGithub />, title: 'Github' },
	{ _id: 'bluesky', href: 'https://bsky.app/profile/joao.earth', icon: <IconBrandBluesky />, title: 'Bluesky' },
	{ _id: 'email', href: 'mailto:contact@joao.earth', icon: <IconMail />, title: 'contact@joao.earth' },
];

/* * */

export function MainFooterContacts() {
	return (
		<div className={styles.wrapper}>
			{CONTACTS.map(item => (
				// <div key={item._id} className={styles.contact}>
				<Link key={item._id} className={styles.contact} href={item.href} target="_blank">{item.icon} {item.title}</Link>
				// </div>
			))}
		</div>
	);
}
