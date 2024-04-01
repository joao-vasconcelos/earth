/* * */

import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import WorkProjectsTemplateIntro from '@/components/WorkProjectsTemplateIntro/WorkProjectsTemplateIntro';

/* * */

export default function WorkProjectsTemplate({ projectData, children }) {
  return (
    <main>
      <WorkProjectsTemplateIntro projectData={projectData} />
      <Container>
        <Section>{children}</Section>
      </Container>
    </main>
  );
}
