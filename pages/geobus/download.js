import { useEffect } from 'react';
import { Section, Container } from '../../components/global/Layout';
import { styled } from '@stitches/react';

const Redirecting = styled(Section, {
  padding: '150px 0',
  textAlign: 'center',
});

export default function GeoBus() {
  //
  const APPSTORE_URL = 'https://apps.apple.com/us/app/geobus/id1510035079';

  useEffect(() => {
    window.location.assign(APPSTORE_URL);
  });

  return (
    <div>
      <Redirecting>
        <Container>
          <h1>Redirecting to the App Store...</h1>
          <a href={APPSTORE_URL}>{"Click here if it doesn't work ›"}</a>
        </Container>
      </Redirecting>
    </div>
  );
}
