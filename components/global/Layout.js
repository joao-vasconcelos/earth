import { styled } from '@stitches/react';

export const Section = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '80px 0',
  '@media only screen and (max-width: 900px)': {
    padding: '50px 0',
  },
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0 50px',
  margin: 'auto',
  width: '100%',
  maxWidth: '1200px',
  '@media only screen and (max-width: 900px)': {
    padding: '0 25px',
  },
});
