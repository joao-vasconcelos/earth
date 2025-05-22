/* * */

import { PostPage } from '@/components/blog/PostPage';
import { getDocumentSlugs } from 'outstatic/server';

/* * */

export async function generateStaticParams() {
	const posts = getDocumentSlugs('posts');
	return posts.map(slug => ({ slug }));
}

/* * */

interface Props {
	params: Promise<{ slug: string }>
}

/* * */

export default async function Post({ params }: Props) {
	const pageParams = await params;
	return <PostPage slug={pageParams.slug} />;
}
