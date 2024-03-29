import { styled } from '@stitches/react';
import { Section, Container } from '../global/Layout';
import ProjectTags from './ProjectTags';

const Intro = styled(Section, {
  backgroundColor: 'var(--system-background)',
});

const IntroContainer = styled(Container, {
  gap: 10,
});

const Title = styled('p', {
  fontSize: 30,
  color: 'var(--system-text)',
  fontWeight: 700,
  textAlign: 'left',
  lineHeight: 1,
});

const Description = styled('p', {
  fontSize: 17,
  textAlign: 'left',
  lineHeight: 1.6,
  color: 'var(--system-text)',
  maxWidth: 450,
  marginTop: 20,
});

export default function ProjectIntro({ title, tags, description }) {
  return (
    <Intro>
      <IntroContainer>
        <Title>{title}</Title>
        <ProjectTags tags={tags} />
        <Description>{description}</Description>
      </IntroContainer>
    </Intro>
  );
}
