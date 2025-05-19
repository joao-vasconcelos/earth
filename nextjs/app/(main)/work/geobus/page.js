/* * */

import GeoBusScreenshot1 from '@/assets/geobus/geobus-screenshot-1.png';
import GeoBusScreenshot2 from '@/assets/geobus/geobus-screenshot-2.png';
import Columns from '@/components/Columns/Columns';
import { Container } from '@/components/Container';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import { Section } from '@/components/Section';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import WorkProjectsTemplateTextSnippet from '@/components/WorkProjectsTemplateTextSnippet/WorkProjectsTemplateTextSnippet';
import WorkProjectsData from '@/data/WorkProjects.json';
import { useTranslations } from 'next-intl';

/* * */

export default function Page() {
	//

	//
	// A. Setup variables

	const workProjectsDataTranslations = useTranslations('WorkProjectsData.geobus');

	//
	// B. Render components

	return (
		<WorkProjectsTemplate projectData={WorkProjectsData.geobus}>
			<Container>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_1', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
				</Section>
			</Container>

			<Container>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_2', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
					<Columns cols={2} css={{ paddingTop: 50 }} hAlign="center" vAlign="top">
						<FullWidthImage alt="SPG Logo" src={GeoBusScreenshot1} withRoundEdges withShadow />
						<FullWidthImage alt="SPG Logo" src={GeoBusScreenshot2} withRoundEdges withShadow />
					</Columns>
				</Section>
			</Container>
		</WorkProjectsTemplate>
	);

	//
}
