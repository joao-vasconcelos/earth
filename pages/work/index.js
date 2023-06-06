import ProjectButton from '../../components/projects/ProjectButton';
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
          <h1>It is very easy to be different, but very difficult to be better.</h1>
          <h3>Jonathan Ive</h3>
          <p>
            Building better tools is what wakes me up in the morning. It all starts by defining the problem to be solved, and thinking about it from the user&apos;s perspective. Only by focusing hard on this approach it is possible to be confident in
            one&apos;s decisions. The following examples combine design, technology and a lot of dedication to create intuitive tools that simplify it&apos;s users lives.
          </p>
        </Container>
      </Intro>

      <ProjectsList>
        <ProjectButton id='spg' title='Sociedade Portuguesa de Ginecologia' tags={['Strategy', 'Brand Design', 'UI/UX Design', 'Platform Development']} accent='rgb(203, 0, 90)' />
        <ProjectButton id='register' title='POS Register' tags={['UI/UX Design', 'Platform Development']} accent='#e42528' />
        <ProjectButton id='geobus' title='GeoBus' tags={['UI/UX Design', 'App Development']} accent='rgb(255, 160, 0)' />
        <ProjectButton id='jodel' title='Jodel' tags={['Strategy', 'Brand Design', 'Web Development']} accent='rgb(255, 100, 0)' />
        <ProjectButton id='jfld' title='Jean-François Le Dû' tags={['Web Development']} accent='rgb(170, 0, 215)' />
        <ProjectButton id='alh' title='Aroeira Lisbon Hotel' tags={['Web Development']} accent='#0a2341' />
        <ProjectButton id='lrf' title='Leal Rios Foundation' tags={['Web Development']} accent='rgb(71, 69, 85)' />
      </ProjectsList>
    </main>
  );
}
