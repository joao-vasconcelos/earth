/* * */

import AlhWebsite1 from '@/assets/work/alh/alh-website-1.png';
import { Container } from '@/components/Container';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import { Section } from '@/components/Section';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import WorkProjectsData from '@/data/WorkProjects.json';
import { useTranslations } from 'next-intl';

/* * */

export default function Page() {
	//

	//
	// A. Setup variables

	const workProjectsDataTranslations = useTranslations('WorkProjectsData.alh');

	//
	// B. Render components

	return (
		<WorkProjectsTemplate projectData={WorkProjectsData.alh}>
			<Container>
				<Section>
					<video style={{ borderRadius: 5, boxShadow: 'var(--box-shadow-large)', width: '100%' }} autoPlay loop muted>
						<source src="https://perennial.joao.earth/earth/work/alh/alh-video-1.mp4" type="video/mp4" />
					</video>
				</Section>
			</Container>
			<Container>
				<Section>
					<FullWidthImage alt={workProjectsDataTranslations('media.website_1.alt')} src={AlhWebsite1} withFalseWidth />
				</Section>
			</Container>
			<Container>
				<Section>
					<video style={{ borderRadius: 5, boxShadow: 'var(--box-shadow-large)', width: '100%' }} autoPlay loop muted>
						<source src="https://perennial.joao.earth/earth/work/alh/alh-video-2.mp4" type="video/mp4" />
					</video>
				</Section>
			</Container>
		</WorkProjectsTemplate>
	);

	//
}
