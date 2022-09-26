import { styled } from '@stitches/react';
import Image from 'next/future/image';

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
        </Container>
      </Section>

      <Section>
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
    </main>
  );
}
