/* * */

import { useTranslations } from 'next-intl';
import WorkProjectsData from '@/data/WorkProjects.json';
import WorkProjectsTemplate from 'nextjs/componentsNew/WorkProjectsTemplate/WorkProjectsTemplate';
import Container from 'nextjs/componentsNew/Container/Container';
import Section from 'nextjs/componentsNew/Section/Section';
import FullWidthImage from 'nextjs/componentsNew/FullWidthImage/FullWidthImage';
import AlhWebsite1 from '@/assets/work/alh/alh-website-1.png';

/* * */

export default function Page() {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData.alh');

  //
  // B. Render components

  return (
    <WorkProjectsTemplate projectData={WorkProjectsData.alh}>
      <Container>
        <Section>
          <video autoPlay muted loop style={{ width: '100%', borderRadius: 5, boxShadow: 'var(--box-shadow-large)' }}>
            <source src="https://perennial.joao.earth/earth/work/alh/alh-video-1.mp4" type="video/mp4" />
          </video>
        </Section>
      </Container>
      <Container>
        <Section>
          <FullWidthImage src={AlhWebsite1} alt={workProjectsDataTranslations('media.website_1.alt')} withFalseWidth />
        </Section>
      </Container>
      <Container>
        <Section>
          <video autoPlay muted loop style={{ width: '100%', borderRadius: 5, boxShadow: 'var(--box-shadow-large)' }}>
            <source src="https://perennial.joao.earth/earth/work/alh/alh-video-2.mp4" type="video/mp4" />
          </video>
        </Section>
      </Container>
    </WorkProjectsTemplate>
  );

  //
}
