'use client';

/* * */

import { MainHeaderNavigationToggle } from '@/components/header/MainHeaderNavigationToggle';
import NavigationData from '@/data/Navigation.json';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

import styles from './styles.module.css';

/* * */

export function MainHeaderNavigationMobile() {
	//

	//
	// A. Setup variables

	const [isOpen, setIsOpen] = useState(false);
	const navigationDataTranslations = useTranslations('NavigationData');

	//
	// B. Transform data

	const allNavigationLinksDataFormatted = NavigationData.map(item => ({ ...item, label: navigationDataTranslations(`${item.id}.label`) }));

	//
	// C. Handle actions

	const handleToggle = () => {
		setIsOpen(prev => !prev);
	};

	//
	// D. Render components

	return (
		<>

			<div className={styles.container}>
				<MainHeaderNavigationToggle isOpen={isOpen} onClick={handleToggle} />
			</div>

			{isOpen && (
				<div className={styles.navWrapper}>
					<MainHeaderNavigationToggle isOpen={isOpen} onClick={handleToggle} />
					{allNavigationLinksDataFormatted.map(item => (
						<Link key={item.id} className={styles.navLink} href={item.href} onClick={handleToggle}>
							{item.label}
						</Link>
					))}
				</div>
			)}

		</>
	);

	//
}
