import { styled } from '@stitches/react';
import { Container, Section } from '../../../components/global/Layout';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import FullWidthImage from '../../../components/global/FullWidthImage';
import ALHWebsite1 from './assets/alh-website-1.png';

export default function ProjectALH() {
  return (
    <main>
      <ProjectIntro
        title='Aroeira Lisbon Hotel'
        tags={['Web Development']}
        description='Design and programming of website integrating agile and low-cost closer-to-customer technologies.'
      />

      <Section>
        <Container>
          <FullWidthImage src={ALHWebsite1} alt={'Website1'} />
        </Container>
      </Section>
    </main>
  );
}
