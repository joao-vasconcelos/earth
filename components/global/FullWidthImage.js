import { styled } from '@stitches/react';
import Image from 'next/future/image';

const Wrapper = styled('div', {
  width: '100%',
  '& img': {
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
});

export default function FullWidthImage({ src, alt }) {
  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
}
