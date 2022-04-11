import styles from './Saaft.module.css';

export default function Saaft() {
  return (
    <main>
      <div className={styles.intro}>
        <h1>Sistemas Agrícolas e Agro-florestais Tropicais</h1>
      </div>

      <section className={styles.worksContainer}>
        <a className={styles.work} href='/isa/saaft/fc3'>
          <h2>FC#3</h2>
          <h3 className={styles.title}>Silvopasture in the Caatinga Biome of Brazil</h3>
          <p className={styles.description}>Flipped Classroom #3</p>
          <p className={styles.credits}>May 2020 • Márcia Figueira + João de Vasconcelos</p>
        </a>
        <a className={styles.work} href='/isa/saaft/fc2'>
          <h2>FC#2</h2>
          <h3 className={styles.title}>Asia and South America</h3>
          <p className={styles.description}>
            Flipped Classroom #2
            <br />
            Multi-level socioecological drivers of agrarian change.
            <br />
            Cultivating the dry forests of South America
          </p>
          <p className={styles.credits}>May 2020 • Márcia Figueira + João de Vasconcelos</p>
        </a>
        <a className={styles.work} href='/isa/saaft/fc1'>
          <h2>FC#1</h2>
          <h3 className={styles.title}>The Groundnut Basin in Senegal</h3>
          <p className={styles.description}>Flipped Classroom #1</p>
          <p className={styles.credits}>March 2020 • Márcia Figueira + João de Vasconcelos</p>
        </a>
      </section>
    </main>
  );
}
