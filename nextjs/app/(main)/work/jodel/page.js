/* * */

import Image from 'next/image';

import { useTranslations } from 'next-intl';
import WorkProjectsData from '@/data/WorkProjects.json';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import WorkProjectsTemplateTextSnippet from '@/components/WorkProjectsTemplateTextSnippet/WorkProjectsTemplateTextSnippet';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Columns from '@/components/Columns/Columns';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import JodelLogo from '@/assets/work/jodel/jodel-logo.png';
import JodelDesignation from '@/assets/work/jodel/jodel-designation.svg';
import JodelPositioning from '@/assets/work/jodel/jodel-positioning.svg';
import JodelCertifications from '@/assets/work/jodel/jodel-certifications.svg';
import JodelWebsite1 from '@/assets/work/jodel/jodel-website-1.png';
import JodelWebsite2 from '@/assets/work/jodel/jodel-website-2.png';

/* * */

export default function Page() {
  //

  //
  // A. Setup variables

  const workProjectsDataTranslations = useTranslations('WorkProjectsData.jodel');

  //
  // B. Render components

  return (
    <WorkProjectsTemplate projectData={WorkProjectsData.jodel}>
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
        </Section>
      </Container>

      <Container>
        <Section>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_3', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_4', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <Columns cols={3} style={{ marginTop: 50 }}>
            <Image src={JodelDesignation} width={220} alt="SPG Logo" />
            <Image src={JodelPositioning} width={250} alt="SPG Logo" />
            <Image src={JodelLogo} width={350} alt="SPG Logo" />
          </Columns>
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
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_6', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
          <Image src={JodelCertifications} width={150} alt="SPG Logo" style={{ marginTop: 25 }} />
        </Section>
      </Container>

      <Container>
        <Section style={{ paddingBottom: 30 }}>
          <WorkProjectsTemplateTextSnippet>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_7', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {workProjectsDataTranslations.rich('paragraphs.paragraph_8', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </WorkProjectsTemplateTextSnippet>
        </Section>
      </Container>

      <div style={{ background: '#cceff6' }}>
        <FullWidthImage src={JodelWebsite1} alt={'Website1'} />
      </div>

      <Container>
        <Section>
          <FullWidthImage src={JodelWebsite2} alt={'Website1'} />
        </Section>
      </Container>
    </WorkProjectsTemplate>
  );

  //
}
