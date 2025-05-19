/* * */

import JfldWebsite1 from '@/assets/work/jfld/jfld-website-1.png';
import JfldWebsite2 from '@/assets/work/jfld/jfld-website-2.png';
import { Container } from '@/components/Container';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import { Section } from '@/components/Section';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import WorkProjectsData from '@/data/WorkProjects.json';
import { useTranslations } from 'next-intl';

/* * */

export default function ProjectJFLD() {
	//

	//
	// A. Setup variables

	const workProjectsDataTranslations = useTranslations('WorkProjectsData.jfld');

	//
	// B. Render components

	return (
		<WorkProjectsTemplate projectData={WorkProjectsData.jfld}>
			<Container>
				<Section>
					<FullWidthImage alt={workProjectsDataTranslations('media.website_1.alt')} src={JfldWebsite1} withFalseWidth />
				</Section>
			</Container>
			<Container>
				<Section>
					<FullWidthImage alt={workProjectsDataTranslations('media.website_2.alt')} src={JfldWebsite2} withFalseWidth />
				</Section>
			</Container>
		</WorkProjectsTemplate>
	);

	//
}
