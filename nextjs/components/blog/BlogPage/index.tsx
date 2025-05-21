/* * */

import { BlogListItem } from '@/components/blog/BlogListItem';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { getDocuments } from 'outstatic/server';

import styles from './styles.module.css';

/* * */

async function getData() {
	const posts = getDocuments('posts', ['slug', 'title']);
	return posts;
}

/* * */

export async function BlogPage() {
	//

	//
	// A. Fetch data

	const posts = await getData();

	//
	// B. Render components

	return (
		<Container className={styles.container}>
			<Section>

				<p className={styles.intro}>
					Welcome to my blog — here you'll find explorations of interesting projects I've been doing. Please feel free to contact me about any topic!
				</p>

				<div className={styles.postsList}>
					{posts.map(item => (
						<BlogListItem
							key={item.slug}
							publishedAt={item.publishedAt}
							slug={item.slug}
							title={item.title}
						/>
					))}
				</div>

			</Section>
		</Container>
	);

	//
}
