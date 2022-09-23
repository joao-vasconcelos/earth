import YoutubeEmbed from '../../services/youtube/YoutubeEmbed';
import styles from './Infrastructure.module.css';

export default function Infrastructure() {
  return (
    <main>
      <section className={styles.intro}>
        <container>
          <h1>This page is about me</h1>
        </container>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
