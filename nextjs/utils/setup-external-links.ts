/* * */

import { type Element } from 'hast';
import { type Plugin } from 'unified';
import { visit } from 'unist-util-visit';

/* * */

export const rehypeExternalLinks: Plugin = () => {
	return (tree) => {
		visit(tree, 'element', (node: Element) => {
			if (node.tagName !== 'a') return;
			const href = node.properties?.href as string | undefined;
			if (href && /^https?:\/\//.test(href) && !href.includes('joao.earth')) {
				node.properties = {
					...node.properties,
					rel: 'noopener noreferrer',
					target: '_blank',
				};
			}
		});
	};
};
