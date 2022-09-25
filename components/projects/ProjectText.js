import { styled } from '@stitches/react';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  maxWidth: '450px',
  '& strong': {
    fontSize: 17,
    fontWeight: 'bold',
  },
  '& p': {
    margin: 0,
    fontSize: '17px',
    fontWeight: 'normal',
  },
});

export default function ProjectText({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
