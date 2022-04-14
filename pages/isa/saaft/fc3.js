import styles from './Saaft.module.css';

export default function Saaft() {
  return (
    <main>
      <section className={styles.flippedClassroom}>
        <container className={styles.player}>
          <video controls poster='https://perennial.joao.earth/earth/isa/saaft/fc3/saaft-fc3-silvopasture-in-the-caatinga-biome-of-brazil-cover.png'>
            <source
              src='https://perennial.joao.earth/earth/isa/saaft/fc3/saaft-fc3-silvopasture-in-the-caatinga-biome-of-brazil.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </container>

        <container className={styles.info}>
          <p className={styles.title}>Silvopasture in the Caatinga Biome of Brazil</p>
          <p className={styles.credits}>Márcia Figueira + João de Vasconcelos</p>
          <p className={styles.disclaimer}>May 2020 • Sistemas Agrícolas e Agro-Florestais Tropicais</p>
        </container>

        <container className={styles.info}>
          <p className={styles.title}>Pinheiro, F., et al.</p>
          <p className={styles.credits}>
            Silvopasture in the Caatinga biome of Brazil: A review of its ecology, management, and development opportunities
          </p>
          <p className={styles.disclaimer}>Forest Systems (2018), https://doi.org/10.5424/fs/2018271-12267</p>
          <a
            className={styles.download}
            href='https://perennial.joao.earth/earth/isa/saaft/fc3/saaft-fc3-silvopasture-in-the-caatinga-biome-of-brazil.pdf'
            target='_blank'
            rel='noreferrer'
            download
          >
            ⬇︎ Download Article
          </a>
        </container>

        <container className={styles.info}>
          <p className={styles.title}>Pezzopane, R., et al.</p>
          <p className={styles.credits}>Microclimate and soil moisture in a silvopastoral system in southeastern Brazil</p>
          <p className={styles.disclaimer}>Agrometeorology (2014), http://dx.doi.org/10.1590/1678-4499.0334</p>
          <a
            className={styles.download}
            href='https://perennial.joao.earth/earth/isa/saaft/fc3/saaft-fc3-microclimate-and-soil-moisture-in-a-silvopastoral-system-in-southeastern-brazil.pdf'
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
