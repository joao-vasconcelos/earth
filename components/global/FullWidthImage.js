import { styled } from '@stitches/react';
import Image from 'next/future/image';

const Wrapper = styled('div', {
  width: 'calc(100% + 74px)',
  marginLeft: -37,
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
