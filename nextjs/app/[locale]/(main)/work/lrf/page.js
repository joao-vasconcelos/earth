/* * */

import { useTranslations } from 'next-intl';
import WorkProjectsData from '@/data/WorkProjects.json';
import WorkProjectsTemplate from 'nextjs/componentsNew/WorkProjectsTemplate/WorkProjectsTemplate';
import Container from 'nextjs/componentsNew/Container/Container';
import Section from 'nextjs/componentsNew/Section/Section';
import FullWidthImage from 'nextjs/componentsNew/FullWidthImage/FullWidthImage';
import LrfWebsite1 from '@/assets/work/lrf/lrf-website-1.png';
import LrfWebsite2 from '@/assets/work/lrf/lrf-website-1.png';

/* * */

export default function Page() {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData.lrf');

  //
  // B. Render components

  return (
    <WorkProjectsTemplate projectData={WorkProjectsData.lrf}>
      <Container>
        <Section>
          <FullWidthImage src={LrfWebsite1} alt={workProjectsDataTranslations('media.website_1.alt')} withFalseWidth />
        </Section>
      </Container>
      <Container>
        <Section>
          <FullWidthImage src={LrfWebsite2} alt={workProjectsDataTranslations('media.website_2.alt')} withFalseWidth />
        </Section>
      </Container>
    </WorkProjectsTemplate>
  );

  //
}
