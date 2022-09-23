import Link from 'next/link';
import { styled } from '@stitches/react';

/* */
/* STYLES */

const Project = styled('div', {
  overflow: 'visible !important',
  background: 'var(--system-background)',
  padding: '60px 0',
  cursor: 'pointer',
  color: 'var(--system-text)',
  transition: 'all 500ms cubic-bezier(0.45, 0.55, 0.1, 1)',
  '&:hover': {
    padding: '65px 0',
    color: '#ffffff',
  },
});

const Container = styled('container', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

const Title = styled('p', {
  fontSize: '26px',
  fontWeight: 700,
  textAlign: 'left',
  lineHeight: 1,
  color: 'inherit',
  // fontFamily: "'rustica'",
  // textTransform: 'uppercase',
});

const Tags = styled('p', {
  fontSize: '15px',
  fontWeight: 500,
  textAlign: 'left',
  lineHeight: 1,
  letterSpacing: '0px',
  textTransform: 'none',
  opacity: 0.8,
  color: 'inherit',
});

export default function ProjectButton({ id, title, tags, accent }) {
  //

  return (
    <Link href={`/work/${id}`}>
      <Project
        css={{
          '&:hover': {
            background: accent,
          },
        }}
      >
        <Container>
          <Title>{title}</Title>
          <Tags>{tags}</Tags>
        </Container>
      </Project>
    </Link>
  );
}
