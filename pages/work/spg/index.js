import { styled } from '@stitches/react';
import Image from 'next/future/image';
import SPGLogo from './assets/spg-logo.svg';
import SPGWebsite1 from './assets/spg-website-1.png';
import SPGWebsite2 from './assets/spg-website-2.png';
import SPGWebsite3 from './assets/spg-website-3.png';
import SPGWebsite4 from './assets/spg-website-4.png';
import SPGWebsite5 from './assets/spg-website-5.png';
import SPGWebsite6 from './assets/spg-website-6.png';
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
        description='Bringing a clinical community together around the sharing of scientific knowledge.'
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
      <Section css={{ backgroundColor: 'var(--system-background)', paddingBottom: '20px' }}>
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
      <Section css={{ backgroundColor: 'var(--system-background)', paddingTop: '20px' }}>
        <Container>
          <FullWidthImage src={SPGWebsite1} alt={'Website1'} />
          <FullWidthImage src={SPGWebsite2} alt={'Website1'} />
        </Container>
      </Section>
      <Section css={{ paddingBottom: '20px' }}>
        <Container>
          <ProjectText>
            <strong>Pesquisa por Tópicos Científicos</strong>
            <p>
              Toda a plataforma foi concebida e programada tendo um evoluído sistema de organização de informação por
              temas. Este sistema promove o crescimento orgânico da plataforma e permite aos seus utilizadores aceder a
              resultados claros e precisos a cada nova visita.
            </p>
          </ProjectText>
        </Container>
      </Section>
      <Section css={{ paddingTop: '20px' }}>
        <Container>
          <FullWidthImage src={SPGWebsite3} alt={'Website1'} />
        </Container>
      </Section>

      <Section css={{ backgroundColor: 'var(--system-background)', paddingBottom: '20px' }}>
        <Container>
          <ProjectText>
            <strong>Plataforma Digital</strong>
            <p>
              Contruída com dois objetivos específicos: um novo website de apresentação da SPG de acesso público, e uma
              plataforma de de acesso exclusivo à comunidade ginecológica para partilha de conteúdos e materiais
              científicos em vários formatos.
            </p>
          </ProjectText>
        </Container>
      </Section>
      <Section css={{ backgroundColor: 'var(--system-background)', padding: '20px 0' }}>
        <Container>
          <FullWidthImage src={SPGWebsite4} alt={'Website1'} />
          <FullWidthImage src={SPGWebsite5} alt={'Website1'} />
          <FullWidthImage src={SPGWebsite6} alt={'Website1'} />
        </Container>
      </Section>
    </main>
  );
}
