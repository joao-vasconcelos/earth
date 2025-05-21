/* * */

import { DateTime } from 'luxon';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

interface Props {
	publishedAt: string
	slug: string
	title: string
}

/* * */

export function BlogListItem({ publishedAt, slug, title }: Props) {
	//

	//
	// A. Transform data

	const publishedAtString = DateTime.fromISO(publishedAt).toFormat('LLL yyyy');

	//
	// B. Render components

	return (
		<Link className={styles.container} href={`/blog/${slug}`}>
			<span className={styles.publishedAt}>{publishedAtString}</span>
			<span className={styles.title}>{title}</span>
		</Link>
	);

	//
}
