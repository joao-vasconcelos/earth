import { styled } from '@stitches/react';
import Image from 'next/future/image';
import SPGLogo from './assets/spg-logo.svg';
import SPGWebsite1 from './assets/spg-website-1.png';
import { Container, Section } from '../../../components/global/Layout';
import ProjectIntro from '../../../components/projects/ProjectIntro';
import ProjectText from '../../../components/projects/ProjectText';
import FullWidthImage from '../../../components/global/FullWidthImage';

const TwoColumns = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 30,
});

export default function ProjectSPG() {
  return (
    <main>
      <ProjectIntro
        title='Sociedade Portuguesa de Ginecologia'
        tags={['Strategy', 'Brand Design', 'Platform Development']}
        description='Aproximar uma comunidade clínica em torno da partilha de conhecimento científico.'
      />
      <Section>
        <Container>
          <ProjectText>
            <strong>Redesign</strong>
            <p>
              Modernizar e fortalecer a presença da marca SPG e hierarquizar as secções e núcleos em torno de uma
              entidade comum.
            </p>
          </ProjectText>
          <TwoColumns css={{ marginTop: 50, alignItems: 'flex-end', justifyItems: 'center' }}>
            <Image src={SPGLogo} width={300} alt='SPG Logo' />
            <ProjectText>
              <p>
                — Nivelamento dos elementos gráficos do símbolo, tratamento dos elementos tipográficos do logótipo e
                definição do universo cromático da SPG.
              </p>
            </ProjectText>
          </TwoColumns>
        </Container>
      </Section>
      <Section>
        <Container>
          <ProjectText>
            <strong>Academia SPG</strong>
            <p>
              Concretizando o principal objetivo da SPG, projetei e construí uma plataforma dedicada e de acesso
              exclusivo à comunidade ginecológica, para partilha de conteúdos e materiais científicos em vários formatos
              — vídeos cirúrgicos, papers, podcasts, webinars, etc.
            </p>
          </ProjectText>
        </Container>
      </Section>
      <Section css={{ backgroundColor: '#EBE9E6', padding: '50px 0' }}>
        <Container>
          <FullWidthImage src={SPGWebsite1} alt={'Website1'} />
        </Container>
      </Section>
    </main>
  );
}
