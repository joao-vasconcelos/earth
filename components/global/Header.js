import Link from 'next/link';
import randomColor from '../../services/randomColor';
import IconHamburger from '../icons/IconHamburger';
import IconX from '../icons/IconX';
import { useEffect, useState } from 'react';
import { styled } from '@stitches/react';

const Header = styled('header', {
  position: 'fixed',
  top: '0',
  width: '100%',
  padding: '15px 0',
  zIndex: 9999,
  backgroundColor: 'var(--system-light)',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'var(--system-border)',
  boxShadow: 'var(--box-shadow)',
});

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 50px',
  margin: 'auto',
  width: '100%',
  maxWidth: '1200px',
  '@media only screen and (max-width: 900px)': {
    padding: '0 25px',
  },
});

const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'var(--font-family-monospace)',
  fontWeight: 'bold',
  fontSize: '18pt',
  textAlign: 'left',
  '& a': {
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const Toggle = styled('div', {
  display: 'none',
  justifySelf: 'flex-end',
  cursor: 'pointer',
  '& g': {
    fill: 'var(--system-text)',
  },
  '@media only screen and (max-width: 900px)': {
    display: 'flex',
  },
});

const Navigation = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '18pt',
});

const NavigationDesktop = styled(Navigation, {
  flexDirection: 'row',
  gap: '40px',
  '& a': {
    color: 'var(--system-text)',
  },
  '@media only screen and (max-width: 900px)': {
    display: 'none',
  },
});

const NavigationMobile = styled(Navigation, {
  display: 'none',
  flexDirection: 'column',
  textAlign: 'right',
  paddingTop: '15px',
  background: 'var(--system-light)',
  '& a': {
    color: 'var(--system-text)',
    width: '100%',
    padding: '15px',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'var(--system-border)',
    textAlign: 'center',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  '& a:last-child': {
    paddingBottom: '5px',
  },
  '@media only screen and (max-width: 900px)': {
    display: 'flex',
  },
});

export default function AppHeader() {
  //
  let pages = [
    { title: 'GeoBus', path: 'geobus' },
    { title: 'Infrastructure', path: 'infrastructure' },
    { title: 'Work', path: 'work' },
    { title: 'About Me', path: 'me' },
  ];
  //

  const [logoColor, setLogoColor] = useState();
  useEffect(() => setLogoColor(randomColor()), []);

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <Header>
      <Container>
        <Logo>
          <a href='/' style={{ color: logoColor }}>
            joão.earth
          </a>
        </Logo>
        <NavigationDesktop>
          {pages.map((page, index) => (
            <Link key={index} href={`/${page.path}`}>
              {page.title}
            </Link>
          ))}
        </NavigationDesktop>
        <Toggle onClick={handleClick}>{isOpen ? <IconX /> : <IconHamburger />}</Toggle>
      </Container>
      {isOpen && (
        <NavigationMobile>
          {pages.map((page, index) => (
            <Link key={index} href={`/${page.path}`} onClick={() => setIsOpen(false)}>
              {page.title}
            </Link>
          ))}
        </NavigationMobile>
      )}
    </Header>
  );
}
