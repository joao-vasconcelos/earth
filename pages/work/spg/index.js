import { styled } from '@stitches/react';
import Image from 'next/future/image';
import SPGLogo from './assets/spg-logo.svg';
import SPGWebsite1 from './assets/spg-website-1.png';
import SPGWebsite2 from './assets/spg-website-2.png';
import SPGWebsite3 from './assets/spg-website-3.png';
import SPGWebsite4 from './assets/spg-website-4.png';
import SPGWebsite5 from './assets/spg-website-5.png';
import SPGWebsite6 from './assets/spg-website-6.png';
import SPGNewsletter1 from './assets/spg-newsletter-1.png';
import SPGInstagram1 from './assets/spg-instagram-1.png';
import SPGLinkedIn1 from './assets/spg-linkedin-1.png';
import SPGFacebook1 from './assets/spg-facebook-1.png';
import { Container, Section } from '../../../components/global/Layout';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import ProjectText from '../../../components/projects/ProjectText';
import FullWidthImage from '../../../components/global/FullWidthImage';

const TwoColumns = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 30,
});

export default function ProjectSPG() {
  return (
    <main>
      <ProjectIntro
        title='Sociedade Portuguesa de Ginecologia'
        tags={['Strategy', 'Brand Design', 'Platform Development']}
        description='Bringing a clinical community together around the sharing of scientific knowledge.'
      />
      <Section>
        <Container>
          <ProjectText>
            <strong>Redesign</strong>
            <p>
              Modernize and strengthen the presence of the SPG brand and hierarchize the sections and nuclei around a
              common entity.
            </p>
          </ProjectText>
          <TwoColumns css={{ marginTop: 50, alignItems: 'flex-end', justifyItems: 'center' }}>
            <Image src={SPGLogo} width={300} alt='SPG Logo' />
            <ProjectText>
              <p>
                — Leveling of the graphic elements in the symbol, treatment of the typographic elements of the logo and
                definition of the chromatic universe of SPG.
              </p>
            </ProjectText>
          </TwoColumns>
        </Container>
      </Section>
      <Section css={{ backgroundColor: 'var(--system-background)', paddingBottom: '20px' }}>
        <Container>
          <ProjectText>
            <strong>Academia SPG</strong>
            <p>
              Fulfilling the main objective of SPG, I designed and built a dedicated platform for the gynecological
              community, for sharing scientific content and materials in various formats — surgical videos, papers,
              podcasts, webinars, among others.
            </p>
          </ProjectText>
        </Container>
      </Section>
      <Section css={{ backgroundColor: 'var(--system-background)', paddingTop: '20px' }}>
        <Container>
          <FullWidthImage src={SPGWebsite1} alt={'Website1'} />
          <FullWidthImage src={SPGWebsite2} alt={'Website1'} />
        </Container>
      </Section>
      <Section css={{ paddingBottom: '20px' }}>
        <Container>
          <ProjectText>
            <strong>Search by Scientific Topics</strong>
            <p>
              The entire platform was conceived and programmed with an evolved system for organizing information by
              topics. This system promotes the organic growth of the platform and allows its users to access clear and
              accurate results with each new visit.
            </p>
          </ProjectText>
        </Container>
      </Section>
      <Section css={{ paddingTop: '20px' }}>
        <Container>
          <FullWidthImage src={SPGWebsite3} alt={'Website1'} />
        </Container>
      </Section>

      <Section css={{ backgroundColor: 'var(--system-background)', paddingBottom: '20px' }}>
        <Container>
          <ProjectText>
            <strong>Digital Platform</strong>
            <p>
              Built with two specific goals: a new public-facing website for the presentation of SPG, and a
              limited-access platform for the gynecological community to share scientific content and materials in
              various formats.
            </p>
          </ProjectText>
        </Container>
      </Section>
      <Section css={{ backgroundColor: 'var(--system-background)', padding: '20px 0' }}>
        <Container>
          <FullWidthImage src={SPGWebsite4} alt={'Website1'} />
          <FullWidthImage src={SPGWebsite5} alt={'Website1'} />
          <FullWidthImage src={SPGWebsite6} alt={'Website1'} />
        </Container>
      </Section>

      <Section css={{ paddingBottom: '20px' }}>
        <Container>
          <ProjectText>
            <strong>Social Networks and Newsletter</strong>
            <p>
              Content creation and management of both the digital platform and social networks — LinkedIn, Facebook and
              Instagram. Monthly newsletter sent to the entire medical community.
            </p>
          </ProjectText>
        </Container>
      </Section>
      <Section css={{ padding: '20px 0' }}>
        <Container>
          <TwoColumns css={{ marginTop: 50, alignItems: 'flex-end', justifyItems: 'center' }}>
            <FullWidthImage src={SPGNewsletter1} alt={'Website1'} />
            <div>
              <FullWidthImage src={SPGInstagram1} alt={'Website1'} />
              <FullWidthImage src={SPGFacebook1} alt={'Website1'} />
              <FullWidthImage src={SPGLinkedIn1} alt={'Website1'} />
            </div>
          </TwoColumns>
        </Container>
      </Section>
    </main>
  );
}
