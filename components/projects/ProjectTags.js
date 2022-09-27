import { styled } from '@stitches/react';

const TagsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '6px',
  marginLeft: '-3px',
});

const Tag = styled('span', {
  fontSize: '8px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  lineHeight: 1,
  letterSpacing: '0.08em',
  color: 'var(--system-text)',
  opacity: 0.8,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'var(--system-text)',
  padding: '5px 7px',
  borderRadius: '999px',
  cursor: 'default',
  variants: {
    alwaysLight: {
      true: {
        color: '#ffffff',
        borderColor: '#ffffff',
      },
    },
  },
});

export default function ProjectTags({ tags, alwaysLight = false }) {
  return (
    <TagsContainer>
      {tags.map((tag, index) => (
        <Tag key={index} alwaysLight={alwaysLight}>
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
}
