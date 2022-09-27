import { styled } from '@stitches/react';
import Image from 'next/future/image';
import Columns from '../../../components/global/Columns';
import JodelDesignation from './assets/jodel-designation.svg';
import JodelPositioning from './assets/jodel-positioning.svg';
import JodelLogo from './assets/jodel-logo.png';
import JodelCertifications from './assets/jodel-certifications.svg';
import JodelWebsite1 from './assets/jodel-website-1.png';
import JodelWebsite2 from './assets/jodel-website-2.png';

import { Container, Section } from '../../../components/global/Layout';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import ProjectText from '../../../components/projects/ProjectText';
import FullWidthImage from '../../../components/global/FullWidthImage';

export default function ProjectJodel() {
  return (
    <main>
      <ProjectIntro
        title='Jodel'
        tags={['Strategy', 'Brand Design', 'Web Development']}
        description='Repositioning the largest Portuguese detergent company by focusing on the revaluation of all its know-how and production capacity, preparing it for a greater bet on internationalization.'
      />

      <Section>
        <Container>
          <ProjectText>
            <strong>Organize by Function</strong>
            <p>
              Analyze the company&apos;s activity — productive capacity and market recognition — identifying its
              distinctive competitive factors. By doing this it was possible to validate a new structural organization
              that enhanced commercial effiency and the valuation of the business intrisinc assets.
            </p>
          </ProjectText>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProjectText>
            <strong>Rebranding</strong>
            <p>
              We valued Jodel&apos;s competitive factors by creating a clear and focused discourse highlighting
              it&apos;s unique ability to answer to the contemporary demands of the national and international markets.
            </p>
          </ProjectText>
          <Columns cols={2} vAlign='bottom' hAlign='left' css={{ marginTop: 80 }}>
            <Image src={JodelDesignation} width={220} alt='SPG Logo' />
            <ProjectText>
              <p>
                Leveling of the graphic elements in the symbol, treatment of the typographic elements of the logo and
                definition of the chromatic universe of SPG.
              </p>
            </ProjectText>
          </Columns>
          <Columns cols={2} vAlign='bottom' hAlign='left' css={{ marginTop: 80 }}>
            <Image src={JodelPositioning} width={250} alt='SPG Logo' />
            <ProjectText>
              <p>
                Leveling of the graphic elements in the symbol, treatment of the typographic elements of the logo and
                definition of the chromatic universe of SPG.
              </p>
            </ProjectText>
          </Columns>
          <Columns cols={2} vAlign='bottom' hAlign='left' css={{ marginTop: 100 }}>
            <Image src={JodelLogo} width={350} alt='SPG Logo' />
            <ProjectText>
              <p>
                Leveling of the graphic elements in the symbol, treatment of the typographic elements of the logo and
                definition of the chromatic universe of SPG.
              </p>
            </ProjectText>
          </Columns>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProjectText>
            <strong>Certifications</strong>
            <p>
              Integration of quality certifications in the identity, indicating the unequivocal industrial capacity for
              customers of any size.
            </p>
          </ProjectText>
          <Image src={JodelCertifications} width={150} alt='SPG Logo' style={{ marginTop: 50 }} />
        </Container>
      </Section>

      <Section css={{ paddingBottom: 50 }}>
        <Container>
          <ProjectText>
            <strong>Website</strong>
            <p>
              Built to be the company&apos;s main business tool, it follows UI/UX standards for optimal use on large and
              small screens.
            </p>
          </ProjectText>
        </Container>
      </Section>
      <Section css={{ padding: 0, background: '#cceff6' }}>
        <Container>
          <FullWidthImage src={JodelWebsite1} alt={'Website1'} />
        </Container>
      </Section>
      <Section>
        <Container>
          <FullWidthImage src={JodelWebsite2} alt={'Website1'} />
        </Container>
      </Section>
    </main>
  );
}
