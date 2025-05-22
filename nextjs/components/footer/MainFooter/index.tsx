/* * */

import { Container } from '@/components/Container';
import { ThemeSwitcher } from '@/components/footer/ThemeSwitcher';
import { Section } from '@/components/Section';
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

export function MainFooter() {
	return (
		<Container>
			<Section paddingBottom paddingTop>

				<div className={styles.contactsList}>
					{CONTACTS.map(item => (
						<Link
							key={item._id}
							className={styles.contact}
							href={item.href}
							target="_blank"
						>
							{item.icon} {item.title}
						</Link>
					))}
				</div>

				<Link className={styles.disclaimer} href="/blog/carris-api">
					If you're just looking for Lisbon's Carris API, please read this post to learn more ›
				</Link>

				<ThemeSwitcher />

			</Section>
		</Container>
	);
}
