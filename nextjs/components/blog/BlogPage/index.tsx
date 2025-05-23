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
		<Container>
			<Section paddingTop>

				<p className={styles.intro}>
					Welcome to my website — here you'll find explorations of projects I've been doing. Normalmente em inglês, mas às vezes em português.
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
