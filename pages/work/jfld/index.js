import { styled } from '@stitches/react';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import JFLDWebsite1 from './assets/jfld-website-1.png';
import JFLDWebsite2 from './assets/jfld-website-2.png';
import { Container, Section } from '../../../components/global/Layout';
import FullWidthImage from '../../../components/global/FullWidthImage';
import ProjectText from '../../../components/projects/ProjectText';

export default function ProjectJFLD() {
  return (
    <main>
      <ProjectIntro
        title='Jean-François Le Dû'
        tags={['Web Development']}
        description='The challenge was to transpose a classic and imminently face-to-face activity to the digital medium. Through the development of an online platform and video content, a place where people with common interests could share meaningful experiences was born.'
      />
      <Section>
        <Container>
          <FullWidthImage src={JFLDWebsite1} alt={'Website1'} />
          <FullWidthImage src={JFLDWebsite2} alt={'Website1'} />
        </Container>
      </Section>
    </main>
  );
}
