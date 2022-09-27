import { styled } from '@stitches/react';
import Image from 'next/future/image';

const Wrapper = styled('div', {
  display: 'flex',
  '& img': {
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
  variants: {
    withMargin: {
      true: {
        width: '108%',
        marginLeft: '-4%',
      },
      false: {
        width: '100%',
        margin: 0,
      },
    },
  },
  defaultVariants: {
    withMargin: true,
  },
});

export default function FullWidthImage({ src, alt, withMargin, maxWidth }) {
  return (
    <Wrapper withMargin={withMargin} css={{ maxWidth: maxWidth }}>
      <Image src={src} alt={alt} priority />
    </Wrapper>
  );
}
