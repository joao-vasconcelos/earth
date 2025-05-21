/* * */

import { youtubePlugin } from '@/utils/setup-youtube';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

/* * */

export async function markdownToHtml(markdown: string) {
	const result = await unified()
		.use(remarkParse) // Parse markdown
		.use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough)
		.use(youtubePlugin) // Handle custom YouTube tag
		.use(remarkRehype, { allowDangerousHtml: true }) // Transform MDX into an HTML string
		.use(rehypeStringify, { allowDangerousHtml: true }) // Serialize a string into HTML elements
		.process(markdown);
	return result.toString();
}
