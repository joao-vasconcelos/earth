import { styled } from '@stitches/react';
import Image from 'next/future/image';

const Wrapper = styled('div', {
  display: 'flex',
  width: '108%',
  marginLeft: '-4%',
  '& img': {
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
});

export default function FullWidthImage({ src, alt, maxWidth }) {
  return (
    <Wrapper css={{ maxWidth: maxWidth }}>
      <Image src={src} alt={alt} priority />
    </Wrapper>
  );
}
