import Link from 'next/link';
import styles from './Saaft.module.css';

export default function Saaft() {
  return (
    <main>
      <section className={styles.intro}>
        <container>
          <h1>Sistemas Agrícolas e Agro-florestais Tropicais</h1>
        </container>
      </section>

      <section className={styles.items}>
        <container>
          <Link href='/isa/saaft/fc3'>
            <a className={styles.work}>
              <h2>FC#3</h2>
              <h3 className={styles.title}>Silvopasture in the Caatinga Biome of Brazil</h3>
              <p className={styles.description}>Flipped Classroom #3</p>
              <p className={styles.credits}>May 2020 • Márcia Figueira + João de Vasconcelos</p>
            </a>
          </Link>
          <Link href='/isa/saaft/fc2'>
            <a className={styles.work}>
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
          </Link>
          <Link href='/isa/saaft/fc1'>
            <a className={styles.work}>
              <h2>FC#1</h2>
              <h3 className={styles.title}>The Groundnut Basin in Senegal</h3>
              <p className={styles.description}>Flipped Classroom #1</p>
              <p className={styles.credits}>March 2020 • Márcia Figueira + João de Vasconcelos</p>
            </a>
          </Link>
        </container>
      </section>
    </main>
  );
}
