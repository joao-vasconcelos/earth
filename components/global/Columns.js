import { styled } from '@stitches/react';

const Wrapper = styled('div', {
  display: 'grid',
  gap: 50,
  variants: {
    cols: {
      1: {
        gridTemplateColumns: '1fr',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@media only screen and (max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@media only screen and (max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
    },
    vAlign: {
      top: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      bottom: {
        alignItems: 'end',
      },
    },
    hAlign: {
      left: {
        justifyItems: 'start',
      },
      center: {
        justifyItems: 'center',
      },
      right: {
        justifyItems: 'end',
      },
    },
  },
});

export default function Columns({ children, css, cols, vAlign, hAlign }) {
  return (
    <Wrapper css={css} cols={cols} vAlign={vAlign} hAlign={hAlign}>
      {children}
    </Wrapper>
  );
}
