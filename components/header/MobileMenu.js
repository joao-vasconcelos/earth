import Link from 'next/link';
import IconHamburger from '../icons/IconHamburger';
import { styled } from '@stitches/react';
import { useState } from 'react';

const Wrapper = styled('div', {
  display: 'block',
});

const Toggle = styled('div', {
  cursor: 'pointer',
  '& path': {
    fill: 'var(--system-text)',
  },
});

const Navigation = styled('div', {
  // position: 'absolute',
  display: 'flex',
  // width: '100%',
  // top: '0',
  // right: '0',
  flexDirection: 'column',
  fontFamily: 'var(--font-family-monospace)',
  fontWeight: 'bold',
  fontSize: '18pt',
  textAlign: 'right',
  padding: '30px',
  background: 'var(--system-light)',
  '& path': {
    fill: 'var(--system-text)',
  },
});

export default function MobileMenu() {
  //

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <Wrapper>
      <Toggle onClick={handleClick}>
        <IconHamburger />
      </Toggle>
      <Navigation>
        <Link href='/geobus'>
          <a>GeoBus</a>
        </Link>
        <Link href='/infrastructure'>
          <a>Infrastructure</a>
        </Link>
        <Link href='/work'>
          <a>Work</a>
        </Link>
      </Navigation>
    </Wrapper>
  );
}
