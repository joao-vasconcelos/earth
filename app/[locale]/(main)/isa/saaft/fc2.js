import styles from './Saaft.module.css';

export default function Saaft() {
  return (
    <main>
      <section className={styles.flippedClassroom}>
        <container className={styles.player}>
          <video controls poster='https://perennial.joao.earth/earth/isa/saaft/fc2/saaft-fc2-asia-and-south-america-cover.png'>
            <source src='https://perennial.joao.earth/earth/isa/saaft/fc2/saaft-fc2-asia-and-south-america.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </container>

        <container className={styles.info}>
          <p className={styles.title}>Asia and South America</p>
          <p className={styles.credits}>Márcia Figueira + João de Vasconcelos</p>
          <p className={styles.disclaimer}>March 2020 • Sistemas Agrícolas e Agro-Florestais Tropicais</p>
        </container>

        <container className={styles.info}>
          <p className={styles.title}>Aravindakshan, S., et al.</p>
          <p className={styles.credits}>
            Multi-level socioecological drivers of agrarian change: Longitudinal evidence from mixed rice-livestock-aquaculture farming systems of
            Bangladesh
          </p>
          <p className={styles.disclaimer}>Agricultural Systems (2020), https://doi.org/10.1016/j.agsy.2019.102695</p>
          <a
            className={styles.download}
            href='https://perennial.joao.earth/earth/isa/saaft/fc2/saaft-fc2-multi-level-socioecological-drivers-of-agrarian-change.pdf'
            target='_blank'
            rel='noreferrer'
            download
          >
            ⬇︎ Download Article
          </a>
        </container>

        <container className={styles.info}>
          <p className={styles.title}>Baldi, G., et al.</p>
          <p className={styles.credits}>
            Cultivating the dry forests of South America: Diversity of land users and imprints on ecosystem functioning
          </p>
          <p className={styles.disclaimer}>Journal of Arid Environments (2014), https://dx.doi.org/10.1016/j.jaridenv.2014.05.027</p>
          <a
            className={styles.download}
            href='https://perennial.joao.earth/earth/isa/saaft/fc2/saaft-fc2-cultivating-the-dry-forests-of-south-america.pdf'
            target='_blank'
            rel='noreferrer'
            download
          >
            ⬇︎ Download Article
          </a>
        </container>
      </section>
    </main>
  );
}
