import Link from 'next/link';
import styles from './Header.module.css';
import randomColor from '../../services/randomColor';
import IconPerson from '../icons/IconPerson';
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
  gap: '30px',
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
  padding: '35px 50px 10px 35px',
  gap: '15px',
  background: 'var(--system-light)',
  '& a': {
    color: 'var(--system-text)',
    backgroundColor: 'var(--system-background)',
    padding: '10px 35px',
    borderRadius: '9999px',
    textAlign: 'center',
    '&:hover': {
      textDecoration: 'none',
    },
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
          <Link href='/'>
            <a style={{ color: logoColor }}>joão.earth</a>
          </Link>
        </Logo>
        <NavigationDesktop>
          {pages.map((page, index) => (
            <Link key={index} href={page.path}>
              <a>{page.title}</a>
            </Link>
          ))}
        </NavigationDesktop>
        <Toggle onClick={handleClick}>{isOpen ? <IconX /> : <IconHamburger />}</Toggle>
      </Container>
      {isOpen && (
        <NavigationMobile>
          {pages.map((page, index) => (
            <Link key={index} href={page.path}>
              <a onClick={() => setIsOpen(false)}>{page.title}</a>
            </Link>
          ))}
        </NavigationMobile>
      )}
    </Header>
  );

  return (
    <Header>
      <Container>
        <Logo>
          <Link href='/'>
            <a style={{ color: logoColor }}>joão.earth</a>
          </Link>
        </Logo>

        <nav className={styles.navigation}>
          <Link href='/geobus'>
            <a>GeoBus</a>
          </Link>
          <Link href='/infrastructure'>
            <a>Infrastructure</a>
          </Link>
          <Link href='/work'>
            <a>Work</a>
          </Link>
        </nav>
        <div className={styles.right}>
          <Link href='/me'>
            <a>
              <IconPerson />
            </a>
          </Link>
        </div>
      </Container>
    </Header>
  );
}
