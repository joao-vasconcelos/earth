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
import SPGNuclei1 from './assets/spg-nuclei-1.png';
import Columns from '../../../components/global/Columns';
import { Container, Section } from '../../../components/global/Layout';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import ProjectText from '../../../components/projects/ProjectText';
import FullWidthImage from '../../../components/global/FullWidthImage';

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
          <Columns cols={2} vAlign='bottom' hAlign='left' css={{ marginTop: 50 }}>
            <Image src={SPGLogo} width={300} alt='SPG Logo' />
            <ProjectText>
              <p>
                Leveling of the graphic elements in the symbol, treatment of the typographic elements of the logo and
                definition of the chromatic universe of SPG.
              </p>
            </ProjectText>
          </Columns>
          <Columns
            cols={1}
            vAlign='bottom'
            hAlign='left'
            css={{ marginTop: 70, paddingTop: 40, borderTop: '1px solid var(--system-border)' }}
          >
            <FullWidthImage src={SPGNuclei1} alt='SPG Logo' />
          </Columns>
          <Columns cols={2} vAlign='top' hAlign='left'>
            <div></div>
            <ProjectText>
              <p>
                Simplification and enhancement of the identity of each section to better convey ownership by SPG. While
                the sub-organisms are specialized in specific areas and behave autonomously, they always work within the
                context of SPG.
              </p>
            </ProjectText>
          </Columns>
        </Container>
      </Section>

      <Section css={{ backgroundColor: 'var(--system-background)' }}>
        <Container>
          <ProjectText>
            <strong>Academia SPG</strong>
            <p>
              Fulfilling the main objective of SPG, I designed and built a dedicated platform for the gynecological
              community, for sharing scientific content and materials in various formats — surgical videos, papers,
              podcasts, webinars, among others.
            </p>
          </ProjectText>
          <Columns cols={1} vAlign='top' hAlign='left' css={{ marginTop: 50 }}>
            <FullWidthImage src={SPGWebsite1} alt={'Website1'} />
            <FullWidthImage src={SPGWebsite2} alt={'Website1'} />
          </Columns>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProjectText>
            <strong>Search by Scientific Topics</strong>
            <p>
              The entire platform was conceived and programmed with an evolved system for organizing information by
              topics. This system promotes the organic growth of the platform and allows its users to access clear and
              accurate results with each new visit.
            </p>
          </ProjectText>
          <Columns cols={1} vAlign='top' hAlign='left' css={{ marginTop: 50 }}>
            <FullWidthImage src={SPGWebsite3} alt={'Website1'} />
          </Columns>
        </Container>
      </Section>

      <Section css={{ backgroundColor: 'var(--system-background)' }}>
        <Container>
          <ProjectText>
            <strong>Digital Platform</strong>
            <p>
              Built with two specific goals: a new public-facing website for the presentation of SPG, and a
              limited-access platform for the gynecological community to share scientific content and materials in
              various formats.
            </p>
          </ProjectText>
          <Columns cols={1} vAlign='top' hAlign='left' css={{ marginTop: 50 }}>
            <FullWidthImage src={SPGWebsite4} alt={'Website1'} />
            <FullWidthImage src={SPGWebsite5} alt={'Website1'} />
            <FullWidthImage src={SPGWebsite6} alt={'Website1'} />
          </Columns>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProjectText>
            <strong>Social Networks and Newsletter</strong>
            <p>
              Content creation and management of both the digital platform and social networks — LinkedIn, Facebook and
              Instagram. Monthly newsletter sent to the entire medical community.
            </p>
          </ProjectText>
          <Columns cols={2} vAlign='top' hAlign='center' css={{ marginTop: 50 }}>
            <FullWidthImage src={SPGNewsletter1} alt={'Website1'} />
            <Columns cols={1} vAlign='top' hAlign='center' css={{ marginTop: 20 }}>
              <FullWidthImage src={SPGInstagram1} alt={'Website1'} maxWidth={300} />
              <FullWidthImage src={SPGFacebook1} alt={'Website1'} />
              <FullWidthImage src={SPGLinkedIn1} alt={'Website1'} />
            </Columns>
          </Columns>
        </Container>
      </Section>
    </main>
  );
}
