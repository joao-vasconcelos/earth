/* * */

import { useTranslations } from 'next-intl';
import WorkProjectsData from '@/data/WorkProjects.json';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import JfldWebsite1 from '@/assets/work/jfld/jfld-website-1.png';
import JfldWebsite2 from '@/assets/work/jfld/jfld-website-2.png';

/* * */

export default function ProjectJFLD() {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData.jfld');

  //
  // B. Render components

  return (
    <WorkProjectsTemplate projectData={WorkProjectsData.jfld}>
      <Container>
        <Section>
          <FullWidthImage src={JfldWebsite1} alt={workProjectsDataTranslations('media.website_1.alt')} withFalseWidth />
        </Section>
      </Container>
      <Container>
        <Section>
          <FullWidthImage src={JfldWebsite2} alt={workProjectsDataTranslations('media.website_2.alt')} withFalseWidth />
        </Section>
      </Container>
    </WorkProjectsTemplate>
  );

  //
}
