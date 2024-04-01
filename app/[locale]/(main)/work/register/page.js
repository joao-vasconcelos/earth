/* * */

import { useTranslations } from 'next-intl';
import WorkProjectsData from '@/data/WorkProjects.json';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import WorkProjectsTemplateTextSnippet from '@/components/WorkProjectsTemplateTextSnippet/WorkProjectsTemplateTextSnippet';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import RegisterMockup1 from '@/assets/work/register/register-mockup-1.png';
import RegisterMockup2 from '@/assets/work/register/register-mockup-2.png';
import RegisterMockup3 from '@/assets/work/register/register-mockup-3.png';
import RegisterMockup4 from '@/assets/work/register/register-mockup-4.png';

/* * */

export default function Page() {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData.register');

  //
  // B. Render components

  return (
    <WorkProjectsTemplate projectData={WorkProjectsData.register}>
      <Container>
        <video autoPlay muted poster="https://perennial.joao.earth/earth/work/register/register-animation-1.png">
          <source src="https://perennial.joao.earth/earth/work/register/register-animation-1.mp4" type="video/mp4" />
        </video>
      </Container>

      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_1', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <FullWidthImage src={RegisterMockup1} alt="SPG Logo" withFalseWidth />
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_2', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
        </Section>
      </Container>

      <Container style={{ backgroundColor: 'var(--system-background)' }}>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_3', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <FullWidthImage src={RegisterMockup2} alt="SPG Logo" withFalseWidth />
        </Section>
      </Container>

      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_4', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <FullWidthImage src={RegisterMockup3} alt="SPG Logo" withFalseWidth />
        </Section>
      </Container>

      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_5', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <FullWidthImage src={RegisterMockup4} alt="SPG Logo" withFalseWidth />
        </Section>
      </Container>
    </WorkProjectsTemplate>
  );

  //
}
