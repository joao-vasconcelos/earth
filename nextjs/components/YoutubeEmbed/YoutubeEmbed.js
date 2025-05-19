/* * */

import styles from './YoutubeEmbed.module.css';

/* * */

export default function YoutubeEmbed({ embedId }) {
	return (
		<div className={styles.container}>
			<iframe allow="picture-in-picture" className={styles.iFrame} height="1080" src={`https://www.youtube.com/embed/${embedId}`} title="Youtube Video" width="1920" allowFullScreen />
		</div>
	);
}
