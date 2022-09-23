import { styled } from '@stitches/react';

const Section = styled('section', {
  backgroundColor: 'var(--system-background)',
});

const Container = styled('container', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const Title = styled('p', {
  fontSize: '30px',
  color: 'var(--system-text)',
  fontWeight: 700,
  textAlign: 'left',
  lineHeight: 1,
});

const Tags = styled('p', {
  fontSize: '17px',
  fontWeight: 500,
  textAlign: 'left',
  lineHeight: 1,
  textTransform: 'none',
  color: 'var(--system-text)',
});

const Description = styled('p', {
  fontSize: '17px',
  textAlign: 'left',
  lineHeight: 1.6,
  color: 'var(--system-text)',
  maxWidth: '600px',
});

export default function ProjectIntro({ title, tags, description, accent }) {
  return (
    <Section>
      <Container>
        <Title>{title}</Title>
        <Tags>{tags}</Tags>
        <Description>{description}</Description>
      </Container>
    </Section>
  );
}
