import styles from './Saaft.module.css';

export default function Saaft() {
  return (
    <main>
      <section className={styles.flippedClassroom}>
        <container className={styles.player}>
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
        </container>

        <container className={styles.info}>
          <p className={styles.title}>The Groundnut Basin in Senegal</p>
          <p className={styles.credits}>Márcia Figueira + João de Vasconcelos</p>
          <p className={styles.disclaimer}>March 2020 • Sistemas Agrícolas e Agro-Florestais Tropicais</p>
        </container>
      </section>
    </main>
  );
}
