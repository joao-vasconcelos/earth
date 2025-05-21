/* * */

import { type Plugin } from 'unified';
import { type Literal } from 'unist';
import { visit } from 'unist-util-visit';

/* * */

interface YouTubeNode extends Literal {
	type: 'html'
	value: string
}

/* * */

export const youtubePlugin: Plugin = () => {
	return (tree) => {
		visit(tree, (node: YouTubeNode) => {
			if (node.type !== 'html' && node.type !== 'text') return;
			const rawMatch = node.value.match(/<YouTube\s+id=["']([\w-]+)["']\s*\/?>/);
			const escapedMatch = node.value.match(/&lt;YouTube\s+id=["']([\w-]+)["']\s*\/?&gt;/);
			const videoId = rawMatch?.[1] ?? escapedMatch?.[1];
			if (videoId) {
				const iframeHtml = `<iframe allow="picture-in-picture" height="1080" src="https://www.youtube.com/embed/${videoId}" title="Youtube Video" width="1920" allowFullScreen></iframe>`;
				// const iframeHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
				node.value = iframeHtml;
				node.type = 'html';
			}
		});
	};
};
