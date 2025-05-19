/* * */

import LrfWebsite1 from '@/assets/work/lrf/lrf-website-1.png';
import LrfWebsite2 from '@/assets/work/lrf/lrf-website-1.png';
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

	const workProjectsDataTranslations = useTranslations('WorkProjectsData.lrf');

	//
	// B. Render components

	return (
		<WorkProjectsTemplate projectData={WorkProjectsData.lrf}>
			<Container>
				<Section>
					<FullWidthImage alt={workProjectsDataTranslations('media.website_1.alt')} src={LrfWebsite1} withFalseWidth />
				</Section>
			</Container>
			<Container>
				<Section>
					<FullWidthImage alt={workProjectsDataTranslations('media.website_2.alt')} src={LrfWebsite2} withFalseWidth />
				</Section>
			</Container>
		</WorkProjectsTemplate>
	);

	//
}
