import Image from 'next/image';
import { styled } from '@stitches/react';
import { Section, Container } from '../../components/global/Layout';
import JoaoProfilePic from './assets/joao.jpg';
import LinkedInLogo from './assets/LinkedInLogo.svg';

const Intro = styled(Section, {
  backgroundColor: 'var(--palette-blue-alpha)',
});

const TwoColumns = styled(Container, {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '50px',
  '& h1': {
    color: 'var(--palette-blue)',
    fontSize: '30px',
  },
  '& h2': {
    color: 'var(--palette-blue)',
    fontSize: '40px',
    maxWidth: '700px',
  },
  '& p': {
    fontSize: '22px',
    maxWidth: '900px',
  },
  '@media only screen and (max-width: 900px)': {
    flexDirection: 'column',
    // alignItems: 'flex-start',
    textAlign: 'center',
  },
});

const ProfilePic = styled(Image, {
  width: '250px',
  height: '250px',
  borderRadius: '999px',
  borderWidth: '7px',
  borderStyle: 'solid',
  borderColor: 'var(--palette-blue)',
  boxShadow: '0 2px 15px 0 rgba(0, 0, 0, 0.2)',
});

const LinkedInLogoWrapper = styled(Container, {
  paddingTop: 40,
  '& a': {
    display: 'flex',
    alignSelf: 'flex-start',
  },
});

export default function Infrastructure() {
  return (
    <main>
      <Intro>
        <TwoColumns>
          <ProfilePic src={JoaoProfilePic} alt='João de Vasconcelos' priority />
          <div>
            <h1>Olá 👋</h1>
            <h2>I believe in the power of design to solve complex social problems.</h2>
          </div>
        </TwoColumns>
      </Intro>
      <Section>
        <Container>
          <div style={{ maxWidth: 700 }}>
            <p>
              <strong>I am an Engineer.</strong>
            </p>
            <p>
              What&apos;s so great about design is that it is a process. It forces you to position yourself in the users
              shoes and think like them, to live their struggle. Only then it is possible to understand the solution to
              be built. I think people focus too much on what a tool does and not so much on the problem it solves, the
              purpose it serves. I build good tools because I focus on this aspect and never forget about it, and
              decisions come naturally this way. My talent is combining design and technology to build things people
              like to use.
            </p>
          </div>
        </Container>
        <LinkedInLogoWrapper>
          <a href='https://www.linkedin.com/in/johnyvasconcelos/' target='_blank' rel='noreferrer'>
            <Image src={LinkedInLogo} width={100} alt='LinkedIn Logo' />
          </a>
        </LinkedInLogoWrapper>
      </Section>
    </main>
  );
}
