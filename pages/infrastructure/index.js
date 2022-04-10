import YoutubeEmbed from '../../services/youtube/YoutubeEmbed';
import styles from '../../styles/Infrastructure.module.css';

export default function Infrastructure() {
  return (
    <main>
      <div className={styles.intro}>
        <h1>How to design cities</h1>
        <p>The Dutch are very practical when it comes to designing their cities.</p>
        <p>
          It is a misconception that the Netherlands has great bike usage because it is flat — it is because it has great infrastructure. Cities
          around the world must learn from the best, starting with these three examples of thoughtful design & engineering, and integration of the
          various components that make a city.
        </p>
        <p>Roads are the arteries of the city, and the Netherlands’ have never been healthier.</p>
        <p>
          Take a look at BicycleDutch on his{' '}
          <a href='https://bicycledutch.wordpress.com/' target='_blank' rel='noreferrer'>
            blog
          </a>{' '}
          and on{' '}
          <a href='https://www.youtube.com/channel/UC67YlPrRvsO117gFDM7UePg' target='_blank' rel='noreferrer'>
            YouTube
          </a>
          .
        </p>
      </div>

      <section className={styles.videoSection}>
        <YoutubeEmbed embedId='FlApbxLz6pA' />
        <div className={styles.videoInfo}>
          <h2>#1 — Junction design the Dutch way</h2>
          <p className={styles.description}>
            The Dutch build cycle paths right on their junctions. So they must have wider streets, right? Wrong! This video shows how it is done, no
            extra space needed.
          </p>
          <p className={styles.credits}>
            by <strong>Mark Wagenbuur</strong>
          </p>
          <a
            className={styles.source}
            href='https://bicycledutch.wordpress.com/2011/04/07/state-of-the-art-bikeway-design-or-is-it/'
            target='_blank'
            rel='noreferrer'
          >
            ► Read Full Article
          </a>
        </div>
      </section>

      <section className={styles.videoSection}>
        <YoutubeEmbed embedId='-GcocOUVRa4' />
        <div className={styles.videoInfo}>
          <h2>#2 — Traffic lights in ‘s-Hertogenbosch</h2>
          <p className={styles.description}>A short overview of how traffic signals work in ‘s-Hertogenbosch.</p>
          <p className={styles.credits}>
            by <strong>Mark Wagenbuur</strong>
          </p>
          <a
            className={styles.source}
            href='https://bicycledutch.wordpress.com/2016/06/21/traffic-lights-in-s-hertogenbosch-an-interview/'
            target='_blank'
            rel='noreferrer'
          >
            ► Read Full Article
          </a>
        </div>
      </section>

      <section className={styles.videoSection}>
        <YoutubeEmbed embedId='XpQMgbDJPok' />
        <div className={styles.videoInfo}>
          <h2>#3 — Junction design in the Netherlands</h2>
          <p className={styles.description}>The Dutch design junctions in such a way that you can safely cycle or walk across them.</p>
          <p className={styles.credits}>
            by <strong>Mark Wagenbuur</strong>
          </p>
          <a
            className={styles.source}
            href='https://bicycledutch.wordpress.com/2014/02/23/junction-design-in-the-netherlands/'
            target='_blank'
            rel='noreferrer'
          >
            ► Read Full Article
          </a>
        </div>
      </section>
    </main>
  );
}
