/* * */

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import WorkProjectsData from '@/data/WorkProjects.json';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import WorkProjectsTemplateTextSnippet from '@/components/WorkProjectsTemplateTextSnippet/WorkProjectsTemplateTextSnippet';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import Columns from '@/components/Columns/Columns';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import SPGLogo from '@/assets/work/spg/spg-logo.svg';
import SPGSeccao1 from '@/assets/work/spg/spg-seccao-1.svg';
import SPGSeccao2 from '@/assets/work/spg/spg-seccao-2.svg';
import SPGSeccao3 from '@/assets/work/spg/spg-seccao-3.svg';
import SPGSeccao4 from '@/assets/work/spg/spg-seccao-4.svg';
import SPGSeccao5 from '@/assets/work/spg/spg-seccao-5.svg';
import SPGWebsite1 from '@/assets/work/spg/spg-website-1.png';
import SPGWebsite2 from '@/assets/work/spg/spg-website-2.png';
import SPGWebsite3 from '@/assets/work/spg/spg-website-3.png';
import SPGWebsite4 from '@/assets/work/spg/spg-website-4.png';
import SPGWebsite5 from '@/assets/work/spg/spg-website-5.png';
import SPGWebsite6 from '@/assets/work/spg/spg-website-6.png';
import SPGNewsletter1 from '@/assets/work/spg/spg-newsletter-1.png';
import SPGInstagram1 from '@/assets/work/spg/spg-instagram-1.png';
import SPGLinkedIn1 from '@/assets/work/spg/spg-linkedin-1.png';
import SPGFacebook1 from '@/assets/work/spg/spg-facebook-1.png';

/* * */

export default function Page() {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData.spg');

  //
  // B. Render components

  return (
    <WorkProjectsTemplate projectData={WorkProjectsData.spg}>
      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_1', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_2', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <Image src={SPGLogo} width={300} alt="SPG Logo" style={{ marginTop: 25 }} />
        </Section>
      </Container>

      <Container style={{ backgroundColor: 'var(--system-background)' }}>
        <Section>
          <Columns cols={5} style={{ gap: 100 }}>
            <FullWidthImage src={SPGSeccao1} alt="SPG Logo" />
            <FullWidthImage src={SPGSeccao2} alt="SPG Logo" />
            <FullWidthImage src={SPGSeccao3} alt="SPG Logo" />
            <FullWidthImage src={SPGSeccao4} alt="SPG Logo" />
            <FullWidthImage src={SPGSeccao5} alt="SPG Logo" />
          </Columns>
          <Columns cols={2}>
            <div />
            <WorkProjectsTemplateTextSnippet>
              <p>
                {workProjectsDataTranslations.rich('paragraphs.paragraph_3', {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </WorkProjectsTemplateTextSnippet>
          </Columns>
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
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_5', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <FullWidthImage src={SPGWebsite1} alt={'Website1'} withFalseWidth />
          <FullWidthImage src={SPGWebsite2} alt={'Website1'} withFalseWidth />
        </Section>
      </Container>

      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_6', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_7', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <FullWidthImage src={SPGWebsite3} alt={'Website1'} withFalseWidth />
        </Section>
      </Container>

      <Container style={{ backgroundColor: 'var(--system-background)' }}>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_8', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_9', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <FullWidthImage src={SPGWebsite4} alt={'Website1'} withFalseWidth />
          <FullWidthImage src={SPGWebsite5} alt={'Website1'} withFalseWidth />
          <FullWidthImage src={SPGWebsite6} alt={'Website1'} withFalseWidth />
        </Section>
      </Container>

      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_10', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_11', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <Columns cols={2}>
            <FullWidthImage src={SPGFacebook1} alt={'Website1'} />
            <FullWidthImage src={SPGLinkedIn1} alt={'Website1'} />
            <FullWidthImage src={SPGNewsletter1} alt={'Website1'} />
            <FullWidthImage src={SPGInstagram1} alt={'Website1'} />
          </Columns>
        </Section>
      </Container>
    </WorkProjectsTemplate>
  );

  //
}
