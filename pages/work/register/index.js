import { styled } from '@stitches/react';
import Columns from '../../../components/global/Columns';
import { Container, Section } from '../../../components/global/Layout';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import ProjectText from '../../../components/projects/ProjectText';
import FullWidthImage from '../../../components/global/FullWidthImage';
import RegisterMockup1 from './assets/register-mockup-1.png';
import RegisterMockup2 from './assets/register-mockup-2.png';
import RegisterMockup3 from './assets/register-mockup-3.png';
import RegisterMockup4 from './assets/register-mockup-4.png';

const Video = styled('video', {
  width: '100%',
});

export default function ProjectChefPoint() {
  return (
    <main>
      <ProjectIntro
        title='POS Register'
        tags={['UI/UX Design', 'Platform Development']}
        description='Design and development of a dedicated suite of apps to manage and simplify the operation of a fast-paced cafeteria business.'
        accent=''
      />

      <Section css={{ background: '#ffffff', padding: 1 }}>
        <Container>
          <Video autoPlay muted>
            <source
              src='https://perennial.ams3.digitaloceanspaces.com/earth/work/register/register-animation-1.mp4'
              type='video/mp4'
            />
          </Video>
        </Container>
      </Section>

      <Section css={{ paddingTop: 50 }}>
        <Container>
          <ProjectText>
            <p>
              <strong>Register was built out of frustation</strong> due to the lack of good solutions in the portuguese
              POS market. All studied options were confusing, lacked essential functionalities and it was clear that
              they missed on the practicality of the operation. Were these companies using the software they were
              building?
            </p>
          </ProjectText>
          <Columns cols={1} vAlign='top' hAlign='center'>
            <FullWidthImage src={RegisterMockup1} alt='SPG Logo' />
          </Columns>
          <ProjectText>
            <p>
              All elements were designed to be very obvious and unobstructive. THe most important metric for a cafeteria
              cashier is speed, closely followed by accuracy. Register optmizes for both by offering large buttons that
              minimize errors and keep the line moving.
            </p>
          </ProjectText>
        </Container>
      </Section>

      <Section css={{ background: 'var(--system-background)' }}>
        <Container>
          <ProjectText>
            <p>
              <strong>Security</strong> was a key aspect considered, here solved by proving each employee with a
              specific 4 digit code. Only entering the code is enough to unlock the register and associate all sales to
              the respective name, allowing for fast staff changes due to unexpected situations.
            </p>
          </ProjectText>
          <Columns cols={1} vAlign='top' hAlign='center'>
            <FullWidthImage src={RegisterMockup2} alt='SPG Logo' />
          </Columns>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProjectText>
            <p>
              <strong>Overview</strong> is where allowed employees can check the progress of the day. It is possible to
              change date and view each transaction in detail.
            </p>
          </ProjectText>
          <Columns cols={1} vAlign='top' hAlign='center'>
            <FullWidthImage src={RegisterMockup3} alt='SPG Logo' />
          </Columns>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProjectText>
            <p>
              <strong>Tech Stack</strong>
            </p>
            <p>
              The whole system was built in NextJS, and is currently hosted on Vercel. There is also a companion
              dashboard product to allow the remote management of the operation.
            </p>
          </ProjectText>
          <Columns cols={1} vAlign='top' hAlign='center'>
            <FullWidthImage src={RegisterMockup4} alt='SPG Logo' />
          </Columns>
        </Container>
      </Section>
    </main>
  );
}
