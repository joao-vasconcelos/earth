import ProjectButton from '../../components/projects/ProjectButton';
import styles from './Work.module.css';

export default function Work() {
  return (
    <main>
      <section className={styles.intro}>
        <container>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit augue.</h1>
        </container>
      </section>

      <section className={styles.projects}>
        <ProjectButton
          id='spg'
          title='Sociedade Portuguesa de Ginecologia'
          tags='Brand Identity • Digital Communication • Strategy'
          accent='rgb(203, 0, 90)'
        />
        <ProjectButton
          id='status'
          title='Status Group'
          tags='Brand Identity • Digital Communication • Strategy'
          accent='rgb(2, 59, 158)'
        />

        <ProjectButton
          id='chefpoint'
          title='Chef Point'
          tags='Brand Identity • Digital Communication • Strategy'
          accent='#e42528'
        />

        <ProjectButton
          id='alh'
          title='Aroeira Lisbon Hotel'
          tags='Brand Identity • Digital Communication • Strategy'
          accent='#0a2341'
        />
        <ProjectButton
          id='jodel'
          title='Jodel'
          tags='Brand Identity • Digital Communication • Strategy'
          accent='rgb(255, 135, 0)'
        />
        <ProjectButton
          id='jfld'
          title='Jean-François Le Dû'
          tags='Brand Identity • Digital Communication • Strategy'
          accent='rgb(166, 0, 232)'
        />

        <ProjectButton
          id='lrf'
          title='Leal Rios Foundation'
          tags='Brand Identity • Digital Communication • Strategy'
          accent='rgb(71, 69, 85)'
        />
      </section>
    </main>
  );
}
