import { styled } from '@stitches/react';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  maxWidth: '450px',
  color: 'var(--system-text)',
  '& strong': {
    fontSize: 15,
    fontWeight: 'bold',
  },
  '& p': {
    margin: 0,
    fontSize: 15,
    fontWeight: 'normal',
  },
});

export default function ProjectText({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
