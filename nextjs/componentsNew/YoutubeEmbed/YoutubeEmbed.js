/* * */

import styles from './YoutubeEmbed.module.css';

/* * */

export default function YoutubeEmbed({ embedId }) {
  return (
    <div className={styles.container}>
      <iframe className={styles.iFrame} width="1920" height="1080" src={`https://www.youtube.com/embed/${embedId}`} allow="picture-in-picture" allowFullScreen title="Youtube Video" />
    </div>
  );
}
