import YoutubeEmbed from '../../services/youtube/YoutubeEmbed';
import { Section, Container } from '../../components/global/Layout';
import { styled } from '@stitches/react';

const Intro = styled(Section, {
  backgroundColor: 'var(--system-background)',
  '& h1': {
    color: 'var(--palette-blue)',
    maxWidth: '700px',
  },
  '& p': {
    maxWidth: '900px',
  },
});

const VideoSection = styled(Section, {
  backgroundColor: 'var(--system-light)',
  '& h1': {
    color: 'var(--palette-blue)',
  },
  '& p': {
    maxWidth: '900px',
  },
});

const VideoInfo = styled('div', {
  maxWidth: '600px',
  marginTop: '30px',
  '& h2': {
    marginBottom: '25px',
  },
  '& a': {
    display: 'block',
    marginTop: '15px',
    fontSize: '15px',
    fontWeight: 'var(--font-weight)',
  },
});

export default function Infrastructure() {
  return (
    <main>
      <Intro>
        <Container>
          <h1>How to design cities</h1>
          <p>The Dutch are very practical when it comes to designing their cities.</p>
          <p>
            It is a misconception that the Netherlands has great bike usage because it is flat—it is because it has great infrastructure. Cities around the world must learn from the best, starting with these three examples of thoughtful design and
            engineering, and integration of the various components that make a city.
          </p>
          <p>Roads are the arteries of the city, and the Netherlands&apos; have never been healthier.</p>
          <p>
            Take a look at BicycleDutch on his{' '}
            <a href='https://bicycledutch.wordpress.com/' target='_blank' rel='noreferrer'>
              blog
            </a>{' '}
            and on{' '}
            <a href='https://www.youtube.com/channel/UC67YlPrRvsO117gFDM7UePg' target='_blank' rel='noreferrer'>
              YouTube
            </a>
            .
          </p>
        </Container>
      </Intro>

      <VideoSection>
        <Container>
          <YoutubeEmbed embedId='FlApbxLz6pA' />
          <VideoInfo>
            <h2>#1 — Junction design the Dutch way</h2>
            <p>The Dutch build cycle paths right on their junctions. So they must have wider streets, right? Wrong! This video shows how it is done, no extra space needed.</p>
            <p>
              by <strong>Mark Wagenbuur</strong>
            </p>
            <a href='https://bicycledutch.wordpress.com/2011/04/07/state-of-the-art-bikeway-design-or-is-it/' target='_blank' rel='noreferrer'>
              ► Read Full Article
            </a>
          </VideoInfo>
        </Container>
      </VideoSection>

      <Section>
        <Container>
          <YoutubeEmbed embedId='-GcocOUVRa4' />
          <VideoInfo>
            <h2>#2 — Traffic lights in ‘s-Hertogenbosch</h2>
            <p>A short overview of how traffic signals work in ‘s-Hertogenbosch.</p>
            <p>
              by <strong>Mark Wagenbuur</strong>
            </p>
            <a href='https://bicycledutch.wordpress.com/2016/06/21/traffic-lights-in-s-hertogenbosch-an-interview/' target='_blank' rel='noreferrer'>
              ► Read Full Article
            </a>
          </VideoInfo>
        </Container>
      </Section>

      <Section>
        <Container>
          <YoutubeEmbed embedId='XpQMgbDJPok' />
          <VideoInfo>
            <h2>#3 — Junction design in the Netherlands</h2>
            <p>The Dutch design junctions in such a way that you can safely cycle or walk across them.</p>
            <p>
              by <strong>Mark Wagenbuur</strong>
            </p>
            <a href='https://bicycledutch.wordpress.com/2014/02/23/junction-design-in-the-netherlands/' target='_blank' rel='noreferrer'>
              ► Read Full Article
            </a>
          </VideoInfo>
        </Container>
      </Section>
    </main>
  );
}
