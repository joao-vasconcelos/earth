import Columns from '../../../components/global/Columns';
import { Container, Section } from '../../../components/global/Layout';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import ProjectText from '../../../components/projects/ProjectText';
import FullWidthImage from '../../../components/global/FullWidthImage';
import GeoBusScreenshot1 from '../../geobus/assets/geobus-screenshot-1.png';
import GeoBusScreenshot2 from '../../geobus/assets/geobus-screenshot-2.png';

export default function ProjectGeoBus() {
  return (
    <main>
      <ProjectIntro
        title='GeoBus'
        tags={['UI/UX Design', 'App Development']}
        description='iPhone app to map Lisbon buses in real time. It is a hobby project offered for free with the goal of improving the user experience when riding the bus.'
        accent=''
      />

      <Section>
        <Container>
          <ProjectText>
            <p>
              <strong>The current situation is not so friendly</strong> - the user is expected to go to the bus stop and
              patiently wait for the vehicle without any indication of when it might arrive. In some locations,
              estimations or waiting times are available, but due to poor implementation and traffic unpredictability
              most of the time they are wrong.
            </p>
          </ProjectText>
        </Container>
      </Section>

      <Section css={{ paddingTop: 50 }}>
        <Container>
          <ProjectText>
            <p>
              <strong>With a simple interface</strong> it is possible for users to select a route number and visualize
              all the vehicles currently in operation. With this information, and the knowledge acquired by living in
              the city, it becomes intuitive to guess how much time it will take for the bus to arrive.
            </p>
          </ProjectText>
          <Columns cols={2} vAlign='top' hAlign='center' css={{ paddingTop: 50 }}>
            <FullWidthImage withMargin={false} src={GeoBusScreenshot1} alt='SPG Logo' />
            <FullWidthImage withMargin={false} src={GeoBusScreenshot2} alt='SPG Logo' />
          </Columns>
        </Container>
      </Section>
    </main>
  );
}
