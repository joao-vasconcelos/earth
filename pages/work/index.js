import ProjectButton from '../../components/projects/ProjectButton';
import styles from './Work.module.css';
import { Section, Container } from '../../components/global/Layout';
import { styled } from '@stitches/react';

const Intro = styled(Section, {
  backgroundColor: 'var(--palette-orange-alpha)',
  '& h1': {
    color: 'var(--palette-orange)',
    maxWidth: '700px',
  },
  '& h3': {
    color: 'var(--palette-orange)',
    marginBottom: '40px',
  },
  '& p': {
    maxWidth: '900px',
  },
});

const ProjectsList = styled(Section, {
  gap: '10px',
  padding: '10px 0',
});

export default function Work() {
  return (
    <main>
      <Intro>
        <Container>
          <h1>It&apos;s very easy to be different, but very difficult to be better.</h1>
          <h3>Jonathan Ive</h3>
          <p>O design de processos integra</p>
        </Container>
      </Intro>

      <ProjectsList>
        <ProjectButton
          id='spg'
          title='Sociedade Portuguesa de Ginecologia'
          tags='Brand Identity • Digital Communication • Strategy'
          accent='rgb(203, 0, 90)'
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
      </ProjectsList>
    </main>
  );
}
