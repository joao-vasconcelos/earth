import { styled } from '@stitches/react';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import LRFWebsite1 from './assets/lrf-website-1.png';
import LRFWebsite2 from './assets/lrf-website-2.png';
import { Container, Section } from '../../../components/global/Layout';
import FullWidthImage from '../../../components/global/FullWidthImage';
import ProjectText from '../../../components/projects/ProjectText';

export default function ProjectLRF() {
  return (
    <main>
      <ProjectIntro
        title='Leal Rios Foundation'
        tags={['Web Development']}
        description='Development of a new website that technologically follows the evolution of the Foundation.'
      />
      <Section>
        <Container>
          <FullWidthImage src={LRFWebsite1} alt={'Website1'} />
          <FullWidthImage src={LRFWebsite2} alt={'Website1'} />
        </Container>
      </Section>
    </main>
  );
}
