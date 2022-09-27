import { styled } from '@stitches/react';
import { Container, Section } from '../../../components/global/Layout';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import FullWidthImage from '../../../components/global/FullWidthImage';
import ALHWebsite1 from './assets/alh-website-1.png';

const Video = styled('video', {
  width: '100%',
  borderRadius: 5,
  boxShadow: '0 2px 15px 0 rgba(0, 0, 0, 0.2)',
});

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

      <Section>
        <Container>
          <Video autoPlay muted loop>
            <source
              src='https://perennial.ams3.cdn.digitaloceanspaces.com/earth/work/alh/alh-video-1.mp4'
              type='video/mp4'
            />
          </Video>
        </Container>
      </Section>

      <Section>
        <Container>
          <Video autoPlay muted loop>
            <source
              src='https://perennial.ams3.cdn.digitaloceanspaces.com/earth/work/alh/alh-video-2.mp4'
              type='video/mp4'
            />
          </Video>
        </Container>
      </Section>
    </main>
  );
}
