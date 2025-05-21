/* * */

import { PostPage } from '@/components/blog/PostPage';

/* * */

interface Props {
	params: Promise<{ slug: string }>
}

/* * */

export default async function Post({ params }: Props) {
	const pageParams = await params;
	return <PostPage slug={pageParams.slug} />;
}
