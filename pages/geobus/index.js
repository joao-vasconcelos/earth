import Image from 'next/future/image';
import { Section, Container } from '../../components/global/Layout';
import { styled } from '@stitches/react';
import IconStar from '../../components/icons/IconStar';
import IconDownToLineArrow from '../../components/icons/IconDownToLineArrow';
import GeoBusAppIcon from '../../public/images/geobus-icon-1024.png';
import GeoBusScreenshot1 from '../../public/images/geobus-screenshot-1.png';
import GeoBusScreenshot2 from '../../public/images/geobus-screenshot-2.png';
import GeoBusScreenshot3 from '../../public/images/geobus-screenshot-3.png';

const Intro = styled(Section, {
  backgroundColor: 'var(--palette-green-alpha)',
  padding: '60px 0',
  textAlign: 'center',
  '& h1': {
    fontWeight: 'var(--font-weight-bold)',
    fontSize: '40px',
    color: 'var(--palette-green)',
    margin: '0',
  },
});

const AboutGeoBus = styled(Section, {
  [`& ${Container}`]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    '@media only screen and (max-width: 900px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
});

const GeoBusIcon = styled(Image, {
  width: '180px',
  height: '180px',
  borderRadius: '25px',
  boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
});

const GeoBusSummary = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& h1': {
    fontSize: '50px',
    marginBottom: '5px',
  },
  '& p': {
    fontSize: '20px',
  },
  '@media only screen and (max-width: 900px)': {
    alignItems: 'center',
  },
});

const BadgesContainer = styled('div', {
  marginTop: '15px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '15px',
  '@media only screen and (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Badge = styled('span', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '6px',
  padding: '1px 10px',
  borderRadius: '999px',
  borderWidth: '1px',
  borderStyle: 'solid',
  transition: 'all 500ms cubic-bezier(0.45, 0.55, 0.1, 1)',
  '& svg': {
    width: '12px',
  },
  '& path': {
    transition: 'all 500ms cubic-bezier(0.45, 0.55, 0.1, 1)',
  },
  '& span': {
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'all 500ms cubic-bezier(0.45, 0.55, 0.1, 1)',
  },
});

const BadgeUsage = styled(Badge, {
  backgroundColor: 'var(--palette-orange-alpha)',
  borderColor: 'var(--palette-orange)',
  '& path': {
    fill: 'var(--palette-orange)',
  },
  '& span': {
    color: 'var(--palette-orange)',
  },
});

const BadgeDownload = styled(Badge, {
  backgroundColor: 'var(--palette-blue-alpha)',
  borderColor: 'var(--palette-blue)',
  cursor: 'pointer',
  '& path': {
    fill: 'var(--palette-blue)',
  },
  '& span': {
    color: 'var(--palette-blue)',
  },
  '&:hover': {
    backgroundColor: 'var(--palette-blue)',
    borderColor: 'var(--palette-blue)',
    '& path': {
      fill: 'white',
    },
    '& span': {
      color: 'white',
    },
  },
});

const Screenshots = styled(Section, {
  paddingTop: '40px',
  [`& ${Container}`]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '50px',
    '@media only screen and (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

const ScreenshotImage = styled(Image, {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
});

const GeoBusInfo = styled(Section, {
  paddingTop: '40px',
  [`& ${Container}`]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '50px',
    '@media only screen and (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

const Description = styled('div', {
  '& p': {
    marginBottom: '30px',
  },
});

const AppstoreButton = styled(Image, {
  borderRadius: '10px',
  boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
});

export default function GeoBus() {
  //
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <main>
      <Intro>
        <Container>
          <h1>Public Transit should be easier.</h1>
        </Container>
      </Intro>

      <AboutGeoBus>
        <Container>
          <GeoBusIcon src={GeoBusAppIcon} alt='GeoBus Icon' priority />
          <GeoBusSummary>
            <h1>GeoBus</h1>
            <p>Locate Lisbon buses on the map in real time.</p>
            <BadgesContainer>
              <BadgeUsage>
                <IconStar />
                <span>More than 500 Users</span>
              </BadgeUsage>
              <BadgeDownload onClick={() => openInNewTab('/geobus/download')}>
                <IconDownToLineArrow />
                <span>Download Now for Free</span>
              </BadgeDownload>
            </BadgesContainer>
          </GeoBusSummary>
        </Container>
      </AboutGeoBus>

      <Screenshots>
        <Container>
          <ScreenshotImage src={GeoBusScreenshot1} alt='GeoBus Screenshot' priority />
          <ScreenshotImage src={GeoBusScreenshot2} alt='GeoBus Screenshot' priority />
          <ScreenshotImage src={GeoBusScreenshot3} alt='GeoBus Screenshot' priority />
        </Container>
      </Screenshots>

      <GeoBusInfo>
        <Container>
          <Description>
            <p>
              GeoBus allows you to locate Lisbon buses on the map in real time, just by choosing the route number. You
              can also see the latest estimated schedules for all bus stops in Lisbon. Add routes to your favorites so
              they are quickly available when you need them the most.
            </p>
            <p>
              <strong>Features:</strong>
              <br />• Real time location of all vehicles on the map;
              <br />• See complete routes (and alternative paths);
              <br />• Estimated travel times for each stop;
              <br />• Add routes to your favorites.
            </p>
            <p>
              Traffic unpredictability makes it very hard to calculate accurate travel times for Lisbon buses and trams.
              With GeoBus you can see the exact location of each vehicle on the map, and thus get a better notion of how
              much time it will take to arrive at your stop.
            </p>
            <p>
              It is also possible to check estimated ETAs for all Carris stops. Combining this information with
              real-time positioning, riding the bus in Lisbon is gonna be easy-peasy.
            </p>
            <p>All data is kindly provided by Carris itself, and is updated every 30 seconds.</p>
          </Description>
          <a href={'/geobus/download'} target={'_blank'} rel='noreferrer'>
            <AppstoreButton src='/images/appstore-button.png' alt='GeoBus Icon' width={315} height={95} priority />
          </a>
        </Container>
      </GeoBusInfo>
    </main>
  );
}
