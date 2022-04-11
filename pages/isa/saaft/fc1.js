import styles from './Saaft.module.css';

export default function Saaft() {
  return (
    <main className={styles.container}>
      <div className={styles.videoPlayer}>
        <video
          controls
          poster='https://perennial.ams3.cdn.digitaloceanspaces.com/earth/isa/saaft/fc1/saaft-fc1-the-groundnut-basin-in-senegal-cover.png'
        >
          <source
            src='https://perennial.ams3.cdn.digitaloceanspaces.com/earth/isa/saaft/fc1/saaft-fc1-the-groundnut-basin-in-senegal.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className={styles.videoInfoContainer}>
        <div className={styles.videoInfoItem}>
          <p className={styles.title}>The Groundnut Basin in Senegal</p>
          <p className={styles.credits}>Márcia Figueira + João de Vasconcelos</p>
          <p className={styles.disclaimer}>March 2020 • Sistemas Agrícolas e Agro-Florestais Tropicais</p>
        </div>
      </section>
    </main>
  );
}
