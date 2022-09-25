import Link from 'next/link';
import { Container } from '../global/Layout';
import { styled } from '@stitches/react';
import ProjectTags from './ProjectTags';

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

const Title = styled('p', {
  fontSize: '26px',
  fontWeight: 700,
  textAlign: 'left',
  lineHeight: 1.2,
  color: 'inherit',
  marginBottom: '20px',
});

export default function ProjectButton({ id, title, tags, accent }) {
  //

  return (
    <Link href={`/work/${id}`}>
      <Project
        css={{
          color: 'white',
          background: accent,
        }}
      >
        <Container>
          <Title>{title}</Title>
          <ProjectTags tags={tags} alwaysLight />
        </Container>
      </Project>
    </Link>
  );
}
