import { styled } from '@stitches/react';
import { Section, Container } from '../global/Layout';
import IconEmail from '../icons/IconEmail';
import IconGithub from '../icons/IconGithub';
import IconTwitter from '../icons/IconTwitter';

const Footer = styled('footer', {
  backgroundColor: 'var(--system-background)',
});

const Intro = styled(Container, {
  '& h2': {
    color: 'var(--palette-blue)',
  },
});

const Contacts = styled(Container, {
  marginTop: '50px',
  display: 'grid',
  gap: '40px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@media only screen and (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

const ContactMethod = styled('div', {
  padding: '30px',
  backgroundColor: 'var(--system-light)',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  borderRadius: 'var(--border-radius-large)',
  '& path': {
    fill: 'var(--system-text)',
  },
});

const ContactTitle = styled('p', {
  fontSize: '25px',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--system-text)',
});

const ContactMessage = styled('p', {
  fontSize: '18px',
  color: 'var(--system-text)',
  marginTop: '5px',
  '& a': {
    color: 'var(--system-link)',
    fontWeight: 'var(--font-weight-medium)',
  },
});

const ContactDisclaimer = styled('p', {
  fontSize: '12px',
  color: 'var(--system-muted)',
  marginTop: '7px',
});

//

export default function AppFooter() {
  //

  return (
    <Footer>
      <Section>
        <Intro>
          <h2>{"Let's work together."}</h2>
          <p>{'I would love to receive your feedback on my projects.'}</p>
          <p>{"If you'd like to help with code, hit me up on Github."}</p>
          <p>{"I'm also very available on Twitter."}</p>
        </Intro>

        <Contacts>
          <ContactMethod>
            <IconEmail />
            <ContactTitle>Email</ContactTitle>
            <ContactMessage>
              Send me an email to <a href='mailto:contact@joao.earth'>contact@joao.earth</a>
            </ContactMessage>
            <ContactDisclaimer>I might take a while to answer.</ContactDisclaimer>
          </ContactMethod>
          <ContactMethod>
            <IconGithub />
            <ContactTitle>Code</ContactTitle>
            <ContactMessage>
              Check out some projects on my{' '}
              <a href='https://github.com/joao-vasconcelos' target='_blank' rel='noreferrer'>
                GitHub
              </a>{' '}
              page.
            </ContactMessage>
            <ContactDisclaimer>{'Living code is messy code.'}</ContactDisclaimer>
          </ContactMethod>
          <ContactMethod>
            <IconTwitter />
            <ContactTitle>Social</ContactTitle>
            <ContactMessage>
              Twitter is where {"I'm"} usually at:{' '}
              <a href='https://twitter.com/johny________' target='_blank' rel='noreferrer'>
                @johny________
              </a>
            </ContactMessage>
            <ContactDisclaimer>Send me a DM.</ContactDisclaimer>
          </ContactMethod>
        </Contacts>
      </Section>
    </Footer>
  );
}
