import JoaoProfilePic from '../../public/images/joao.jpg';
import Image from 'next/future/image';
import { Section, Container } from '../../components/global/Layout';
import { styled } from '@stitches/react';

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
    justifyContent: 'center',
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
      <Section></Section>
    </main>
  );
}
