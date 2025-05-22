/* * */

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { markdownToHtml } from '@/utils/markdown-to-html';
import { DateTime } from 'luxon';
import { notFound } from 'next/navigation';
import { getDocumentBySlug } from 'outstatic/server';

import styles from './styles.module.css';

/* * */

async function getData(slug: string) {
	const post = getDocumentBySlug('posts', slug, ['title', 'publishedAt', 'slug', 'author', 'content', 'coverImage']);
	if (!post) return null;
	const content = await markdownToHtml(post.content || '');
	return { ...post, content };
}

/* * */

interface Props {
	slug: string
}

/* * */

export async function PostPage({ slug }: Props) {
	//

	//
	// A. Fetch data

	const postData = await getData(slug);

	if (!postData) notFound();

	//
	// A. Transform data

	const publishedAtString = DateTime.fromISO(postData.publishedAt).toFormat('LLL yyyy');

	//
	// B. Render components

	return (
		<Container className={styles.container}>
			<Section paddingTop>

				<div className={styles.headerWrapper}>
					<h1 className={styles.postTitle}>{postData.title}</h1>
					<p className={styles.publishedAt}>{publishedAtString}</p>
				</div>

				<div className={styles.postContent} dangerouslySetInnerHTML={{ __html: postData.content }} />

			</Section>
		</Container>
	);

	//
}
