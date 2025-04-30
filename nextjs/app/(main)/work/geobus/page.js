/* * */

import { useTranslations } from 'next-intl';
import WorkProjectsData from '@/data/WorkProjects.json';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import WorkProjectsTemplateTextSnippet from '@/components/WorkProjectsTemplateTextSnippet/WorkProjectsTemplateTextSnippet';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Columns from '@/components/Columns/Columns';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import GeoBusScreenshot1 from '@/assets/geobus/geobus-screenshot-1.png';
import GeoBusScreenshot2 from '@/assets/geobus/geobus-screenshot-2.png';

/* * */

export default function Page() {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData.geobus');

  //
  // B. Render components

  return (
    <WorkProjectsTemplate projectData={WorkProjectsData.geobus}>
      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_1', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
        </Section>
      </Container>

      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_2', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <Columns cols={2} vAlign="top" hAlign="center" css={{ paddingTop: 50 }}>
            <FullWidthImage src={GeoBusScreenshot1} alt="SPG Logo" withShadow withRoundEdges />
            <FullWidthImage src={GeoBusScreenshot2} alt="SPG Logo" withShadow withRoundEdges />
          </Columns>
        </Section>
      </Container>
    </WorkProjectsTemplate>
  );

  //
}
